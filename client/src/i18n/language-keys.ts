export type LanguageKeys =
  | '_LANGUAGE'
  // other meal info
  | 'Rin'
  | 'Sch'
  | 'Vgt'
  | 'Vgn'
  | 'Fis'
  | 'Gfl'
  | 'Alk'
  // allergenes
  | 'A'
  | 'ADI'
  | 'AGE'
  | 'AHA'
  | 'AKA'
  | 'ARO'
  | 'AWE'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'HMA'
  | 'HHA'
  | 'HWA'
  | 'HCA'
  | 'HPE'
  | 'HPA'
  | 'HPI'
  | 'HQU'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  // additives
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  // names of mensas
  | 'aasee'
  | 'davinci'
  | 'denkpause'
  | 'ring'
  | 'steinfurt'
  | 'aasee_short'
  | 'davinci_short'
  | 'denkpause_short'
  | 'ring_short'
  | 'steinfurt_short'
  // Strings in actual app
  | 'SWITCH_LANGUAGE'
  | 'SIGN_UP'
  | 'SIGN_UP_NOW'
  | 'CREATE_ACCOUNT'
  | 'GROUPS'
  | 'SIGN_IN'
  | 'SIGN_IN_NOW'
  | 'SIGN_OUT'
  | 'E_MAIL'
  | 'PASSWORD'
  | 'PASSWORD_CONFIRM'
  | 'NAME'
  | 'PASSWORD_NOT_IDENTICAL'
  | 'SIGN_OUT_MESSAGE'
  | 'TASKS'
  | 'NEW_TASK'
  | 'USER_STATUS'
  | 'STUDENT'
  | 'EMPLOYEE'
  | 'GUEST'
  | 'CHOOSE_STATUS'
  | 'INDIGESTIBILITIES'
  | 'PREFERENCE'
  | 'NETWORK_SYNCING'
  | 'NETWORK_OFFLINE'
  | 'NETWORK_ONLINE'
  | 'NETWORK_SYNC_FAILURE'
  | 'NETWORK_SYNC_SUCESS'
  | 'INTERNET_NEEDED_FOR_SIGN_IN'
  | 'INTERNET_NEEDED_FOR_SIGN_UP'
  | 'INTERNET_NEEDED_TO_JOIN_GROUPS'
  | 'SETTINGS'
  | 'GERMAN'
  | 'ENGLISH'
  | 'LANGUAGE'
  | 'APPEARANCE'
  | 'BACK'
  | 'MEALS_TODAY'
  | 'MEALS_FUTURE'
  | 'GROUPS'
  | 'CREATE_GROUP'
  | 'EDIT_GROUP'
  | 'FILTER_MEALS'
  | 'APPLY_FILTER'
  | 'LOCATION'
  | 'CONTENTS'
  | 'CLOSE'
  | 'DIET'
  | 'STANDARD_DIET'
  | 'STEP_1'
  | 'STEP_2'
  | 'PERSONAL_DATA'
  | 'FOOD_PREFERENCES'
  | 'NEXT_STEP'
  | 'PREVIOUS_STEP'
  | 'STATUS'
  | 'JOIN'
  | 'GROUP_DETAILS'
  | 'JOINGROUP'
  | 'SEARCH_MEALS'
  | 'MEAL'
  | 'BOOKMARKED_MEAL_MSG'
  | 'UNBOOKMARKED_MEAL_MSG'
  | 'CONTINUE'
  | 'PLAN'
  | 'PLANINFO'
  | 'EATINGTOGETHER'
  | 'EATINGTOGETHERINFO'
  | 'CHOICE'
  | 'CHOICEINFO'
  | 'HUNGRY'
  | 'REVIEWS'
  | 'CONTINUE'
  | 'WRITE_A_REVIEW'
  | 'ALL'
  | 'TOMORROW'
  | 'THIS_WEEK'
  | 'NEXT_WEEK'
  | 'ONE_DAY'
  | 'PERIOD'
  | 'DAY'
  | 'FROM'
  | 'UNTIL'
  | 'SELECT_DAY'
  | 'SELECT_START_DATE'
  | 'SELECT_END_DATE'
  | 'SIGN_UP_EXPLANATION'
  | 'NONE'
  | 'SIGN_IN_NEEDED_TO_CREATE_GROUP'
  | 'SIGN_IN_NEEDED_TO_JOIN_GROUP'
  | 'SIGN_IN_NEEDED_TO_JOIN_AND_CREATE_GROUP'
  | 'GROUPS_PAGE_HINT_01'
  | 'GROUPS_PAGE_HINT_02'
  | 'GROUPS_PAGE_HINT_03'
  | 'WHO_WHEN_WHERE'
  | 'PLAN_MENSA_VISITS_WITH_YOUR_FRIENDS'
  | 'MEMBER'
  | 'MEMBERS'
  | 'ATTENDING'
  | 'ABSENT'
  | 'PARTICIPANT'
  | 'PARTICIPANTS'
  | 'MENSA_VISIT'
  | 'CREATE_MENSA_VISIT'
  | 'JOIN_CODE'
  | 'LEAVE_GROUP'
  | 'LEAVE'
  | 'LEAVE_GROUP_CONFIRM_QUESTION'
  | 'CANCEL'
  | 'MENSA_VISITS'
  | 'COPIED_TO_CLIPBOARD'
  | 'NEW_GROUP'
  | 'GROUP_NAME'
  | 'GROUP_INVITE_MESSAGE'
  | 'GROUP_INVITE_TITLE'
  | 'GROUP_SHARE_SUBJECT'
  | 'MEAL_SHARE_MESSAGE'
  | 'MEAL_SHARE_TITLE'
  | 'MEAL_SHARE_SUBJECT'
  | 'SHARE_GROUP'
  | 'SHARE_MEAL'
  | 'COPY_TO_CLIPBOARD'
  | 'TITLE'
  | 'TIME'
  | 'DATE'
  | 'MENSA'
  | 'GIVE_THIS_MENSA_VITIST_A_TITLE'
  | 'CLICK_TO_CHOOSE_DATE'
  | 'CLICK_TO_CHOOSE_TIME'
  | 'MENSA_VISIT_MISSING_FIELDS_MSG'
  | 'MENSA_VISIT_CREATE_ERROR'
  | 'YOU_ARE_ALREADY_A_MEMBER_OF_THIS_GROUP'
  | 'SUCCESSFULLY_JOINED_GROUP'
  | 'DATE_OF_MENSA_VISIT_NEEDS_TO_BE_IN_THE_FUTURE'
  | 'DELETE_MENSA_VISIT'
  | 'DELETE'
  | 'SHARE_GROUP_INVITE'
  | 'COPY_TEXT'
  | 'COPY'
  | 'SHARE_VIA_EMAIL'
  | 'SEND';
