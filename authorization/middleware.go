package authorization

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/dgrijalva/jwt-go"
)

type AuthorizationMiddleware struct {
}

func (*AuthorizationMiddleware) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Authorization")
		if token == "" {
			token = r.Header.Get("X-Session-Token")
			if token == "" {
				cookie, err := r.Cookie("jwt-token")
				if cookie == nil || err != nil || cookie.Value == "" {
					http.Error(w, "Unauthorized", http.StatusUnauthorized)
					return
				}
				token = cookie.Value
			}
		}

		jwtToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
			}
			return os.Getenv("JWT_SECRET"), nil
		})
		if err != nil || !jwtToken.Valid {
			http.Error(w, "Forbidden", http.StatusForbidden)
			log.Println("Forbidden request: ", err.Error())
			return
		}
		next.ServeHTTP(w, r)
	})
}
