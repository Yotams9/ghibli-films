# tasks · Ghibli Films

משימה אחת בכל פעם, לפי הסדר. אחרי כל משימה: בדיקה בעיניים, ואז commit (ידני, לא על ידי הסוכן).
ראו `PRD.md` לפרטי המוצר והעקרונות.

## 1 · רשימת סרטים מ-JSON מקומי
- להוסיף `src/data/films.json` עם 3 סרטים לדוגמה באותו מבנה שדות כמו ה-API (נתוני דמה זמניים — מוחלפים ב-fetch במשימה 3).
- להגדיר `type Film` ב-`src/types.ts` לפי שדות ה-API.
- רכיבים: `FilmCard` (פוסטר, כותרת, שנה) ו-`FilmList` (מקבל `films: Film[]` ב-props ומרנדר FilmCard לכל סרט).
- `App.tsx` מייבא את ה-JSON ומעביר אותו ל-FilmList.
- **Done when:** `/` מציג 3 כרטיסים עם פוסטר, כותרת ושנה, בלי שגיאות TypeScript.

## 2 · ניווט ועמודים
- להתקין `react-router-dom`. `BrowserRouter` ב-`main.tsx`, `Routes` ב-`App.tsx`.
- `HomePage` ב-`/` (עוטף את FilmList), `FilmPage` ב-`/films/:id` (מוצא את הסרט לפי `useParams` מתוך ה-props).
- `Navigation` עם `NavLink` ל-Films, Stats, Random; הקישור הפעיל מקבל class מודגש.
- FilmCard הופך ל-`Link` לעמוד הסרט.
- **Done when:** לחיצה על כרטיס פותחת `/films/<id>` עם פרטי הסרט, והקישור הפעיל בניווט מודגש.

## 3 · fetch מה-API עם טעינה ושגיאה
- ב-`App.tsx`: `useState` ל-`films`, `loading`, `error`; `useEffect` אחד שעושה `fetch` ל-`https://ghibliapi.vercel.app/films`.
- רכיבי `Loader` ו-`ErrorMessage` (מקבל `message` ב-props).
- למחוק את `films.json` והייבוא שלו. זה ה-fetch היחיד באפליקציה.
- **Done when:** בטעינה רואים Loader, אחריה 22 סרטים מהרשת; כשמנתקים רשת רואים ErrorMessage.

## 4 · חיפוש וסינון
- `src/utils/filterFilms.ts`: פונקציה טהורה `filterFilms(films, query, director)` — חיפוש לפי שם (case-insensitive, substring), סינון לפי במאי ("" = כולם).
- `SearchBar` עם input לטקסט ו-select לבמאי (רשימת הבמאים נגזרת מהסרטים). ה-state של החיפוש ב-HomePage.
- הודעת "No films found" כשהרשימה ריקה.
- **Done when:** הקלדת "totoro" משאירה סרט אחד; בחירת במאי מצמצמת את הרשימה; שניהם יחד עובדים.

## 5 · Vitest ובדיקות ל-filterFilms
- להתקין `vitest` ו-`@vitest/ui`; סקריפטים `test` ו-`test:ui` ב-`package.json`.
- `filterFilms.test.ts` עם 5 בדיקות: חיפוש ריק מחזיר הכול; חיפוש לפי שם; חוסר רגישות לאותיות; סינון לפי במאי; שם + במאי יחד.
- **Done when:** `npm test` עובר 5/5 ו-`npm run test:ui` נפתח בדפדפן.

## 6 · StatsPage
- `src/utils/computeStats.ts`: `computeStats(films)` מחזיר `filmsPerDirector` (מיפוי במאי → מספר), `averageScore` (ממוצע `Number(rt_score)`, מעוגל לעשירית), `longestFilm` (לפי `Number(running_time)`).
- `StatsPage` ב-`/stats` מציג טבלת במאים, ממוצע, והסרט הארוך ביותר עם קישור לעמוד שלו.
- `computeStats.test.ts` עם לפחות 3 בדיקות על מערך סרטים קטן.
- **Done when:** `/stats` מציג את שלושת הנתונים, והבדיקות עוברות.

## 7 · RandomPage
- `RandomPage` ב-`/random`: כפתור **Pick a random film**; בלחיצה בוחר סרט אקראי מה-props ומציג FilmCard שלו עם קישור ל-FilmPage.
- **Done when:** כל לחיצה מציגה סרט (יכול להתחלף), ולחיצה עליו פותחת את עמוד הסרט.

## 8 · עמוד 404
- `NotFoundPage` עם הודעה וקישור ל-`/`; route `*` ב-`App.tsx`.
- FilmPage עם id לא קיים מציג גם הוא את NotFoundPage.
- **Done when:** `/whatever` ו-`/films/nope` מציגים 404 עם קישור הביתה שעובד.

## 9 · CSS רספונסיבי
- גריד של כרטיסים: עמודה אחת במסך צר, 2–4 עמודות במסך רחב (`grid` + `minmax`).
- ניווט, SearchBar, FilmPage ו-StatsPage קריאים ב-375px וב-1280px.
- **Done when:** אין גלילה אופקית במסך 375px, והכרטיסים מסתדרים בכמה עמודות במסך רחב.

## 10 · README
- לכתוב מחדש את `README.md`: מה האפליקציה, העמודים, איך מריצים (`npm install`, `npm run dev`, `npm test`, `npm run test:ui`, `npm run build`), מבנה התיקיות, מקור הנתונים.
- הערה על תהליך העבודה: תכנון וביקורת בצ'אט נפרד, מימוש ב-Claude Code (היומן ב-`PROMPTS.md`).
- **Done when:** מי שלא מכיר את הפרויקט יכול להריץ אותו מה-README בלבד.

## 11 · בדיקה סופית
- `npm run build` עובר בלי שגיאות ואזהרות.
- `npm test` עובר במלואו.
- `grep -rn ": any\|as any\|<any>" src` לא מוצא כלום (אין `any` בטיפוסים).
- מעבר בכל העמודים בדפדפן: אין שגיאות או אזהרות בקונסול.
- **Done when:** ארבעת הסעיפים ירוקים, ו-`PROMPTS.md` עודכן ו-commit-ד יחד עם הקוד.
