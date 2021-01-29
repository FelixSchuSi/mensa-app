package authorization

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

type AuthorizationMiddleware struct {
}

func (*AuthorizationMiddleware) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var token string
		split := strings.Split(r.Header.Get("Authorization"), " ")
		if len(split) > 1 {
			//Remove bearer
			token = split[1]
		}
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
			return []byte(os.Getenv("JWT_SECRET")), nil
		})
		if err != nil {
			http.Error(w, "Forbidden", http.StatusForbidden)
			log.Println("Forbidden request: ", err.Error(), " for token: ", token)
			return
		}
		if jwtToken == nil {
			http.Error(w, "Forbidden", http.StatusForbidden)
			log.Println("JWT is nil: ", token)
			return
		}
		if claims, ok := jwtToken.Claims.(jwt.MapClaims); err == nil && ok && jwtToken.Valid {
			r.Header.Set("user", claims["email"].(string))
			next.ServeHTTP(w, r)
		} else {
			http.Error(w, "Forbidden", http.StatusForbidden)
			log.Println("Forbidden request: ", err.Error())
			return
		}

	})
}
