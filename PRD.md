# PRD · Ghibli Films

## מה בונים
אפליקציית **Ghibli Films** — אפליקציית master-detail לסרטי סטודיו ג'יבלי.
קהל היעד: חובבי אנימציה שרוצים לעיין בסרטי הסטודיו, לקרוא על כל סרט ולהשוות בין סרטים ובמאים.
ממשק המשתמש באנגלית.

## מקור המידע
- `GET https://ghibliapi.vercel.app/films` — 22 סרטים, בלי מפתח API, בלי אימות.
- שדות רלוונטיים לכל סרט: `id`, `title`, `original_title`, `original_title_romanised`, `image`, `movie_banner`, `description`, `director`, `producer`, `release_date`, `running_time`, `rt_score`.
- שימו לב: `running_time` ו-`rt_score` מגיעים מה-API **כמחרוזות** (למשל `"124"`, `"95"`). ממירים למספר רק בחישובים (`Number(...)`).
- type Film נגזר מהשדות האלה. אין שימוש ב-`any`.

## כלים
- Vite + React + TypeScript (כבר מותקן).
- **React Router** — ניווט בין עמודים.
- **Vitest** (+ Vitest UI) — בדיקות לפונקציות הטהורות.
- CSS רגיל. בלי ספריות נוספות.

## עמודים ונתיבים
| נתיב | עמוד | מה מציג |
|---|---|---|
| `/` | HomePage | רשימת כל הסרטים (FilmCard לכל סרט), SearchBar לחיפוש לפי שם, select לסינון לפי במאי. שני הסננים עובדים יחד. |
| `/films/:id` | FilmPage | פרטי סרט אחד: כותרת, כותרת מקורית, תמונה/באנר, תיאור, במאי, מפיק, שנת יציאה, אורך, ציון Rotten Tomatoes, קישור חזרה לרשימה. |
| `/stats` | StatsPage | מספר סרטים לכל במאי, ממוצע `rt_score` של כל הסרטים, הסרט הארוך ביותר (שם + דקות). |
| `/random` | RandomPage | כפתור **Pick a random film** שבוחר סרט אקראי ומציג אותו (עם קישור ל-FilmPage שלו). |
| כל כתובת אחרת | NotFoundPage | הודעת 404 וקישור חזרה ל-`/`. |

רכיב **Navigation** עם `NavLink` לכל העמודים מופיע בראש כל עמוד, והקישור הפעיל מודגש.

## עקרונות ארכיטקטורה
1. **fetch אחד בלבד**, בתוך `useEffect` ב-`App.tsx`. אף רכיב אחר לא פונה לרשת.
2. **state רק ב-`useState`** — בלי useReducer, Context, Redux או ספריות state.
3. **מידע עובר ב-props** מ-`App.tsx` כלפי מטה. FilmPage מוצא את הסרט לפי `useParams` מתוך הרשימה שקיבל ב-props.
4. **מצבי טעינה ושגיאה** מטופלים ב-App: רכיב `Loader` בזמן טעינה, רכיב `ErrorMessage` אם ה-fetch נכשל.
5. **לוגיקה בפונקציות טהורות** שניתנות לבדיקה: `filterFilms(films, query, director)` ו-`computeStats(films)`. הרכיבים רק מציגים.
6. **בלי ספריות** מעבר ל-React Router ו-Vitest.
7. **בלי `any`** בשום מקום בקוד.
8. **רספונסיבי** — עובד במסך צר (טלפון) ובמסך רחב.

## קריטריוני קבלה (בדיקה בעיניים)
- **When I** open `/`, **I see** a list of 22 film cards, each showing the film's poster, title and release year.
- **When I** type "totoro" in the search box, **I see** only *My Neighbor Totoro* in the list; when I also pick "Isao Takahata" in the director filter, **I see** an empty list with a "No films found" message.
- **When I** click a film card, **I see** that film's page at `/films/<id>` with its description, director, producer, running time and RT score, and the "Films" link in the navigation is no longer highlighted.
- **When I** open `/stats`, **I see** a films-per-director table, the average RT score as a number, and the title of the longest film; **when I** open `/whatever`, **I see** the 404 page with a link back home.

## מחוץ לתחום (לא בגרסה זו)
- שמירת מועדפים, התחברות משתמשים, עריכת נתונים.
- דפים לדמויות, מיקומים או כלי רכב (ה-API מספק אותם, לא משתמשים בהם).
- דירוג/מיון מתקדם מעבר לחיפוש וסינון.
