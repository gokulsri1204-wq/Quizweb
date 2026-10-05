/* =====================================================
   QUIZMASTER
   QUIZ MANAGEMENT SYSTEM
===================================================== */

/* =====================================================
   QUIZAPI.IO CONFIGURATION
   -----------------------------------------------
   Place your API key below. This key is sent in
   the Authorization header with every request.
   -----------------------------------------------
   ⚠️  Since this is a frontend-only project, the
   key is visible in browser DevTools. This is fine
   for personal / educational use. For production,
   use a backend proxy or serverless function.
===================================================== */

const QUIZ_API_KEY =
    "YOUR_BACKEND_API_KEY";

const QUIZ_API_BASE =
    "https://quizapi.io/api/v1/questions";

/*
    Maps each subject name to one or more
    QuizAPI.io categorySlug values.
    Subjects with multiple slugs will have
    their results merged.
*/
const SUBJECT_API_MAP = {

    Java: ["java"],

    Python: ["python"],

    SQL: ["sql", "sql-queries"],

    DBMS: ["database-design"],

    "Web Development": ["javascript", "css"],

    DSA: ["data-structures", "algorithms"]

};

/* =====================================================
   QUIZ DATABASE  (10 fallback questions per subject)
===================================================== */

const quizData = {

    Java: [

        {
            question:
                "Which keyword is used to inherit a class in Java?",

            options: [
                "implements",
                "extends",
                "inherits",
                "super"
            ],

            answer: 1
        },

        {
            question:
                "Which method is the entry point of a Java program?",

            options: [
                "start()",
                "run()",
                "main()",
                "execute()"
            ],

            answer: 2
        },

        {
            question:
                "Which collection does not allow duplicate elements?",

            options: [
                "List",
                "Set",
                "ArrayList",
                "Vector"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword is used to create an object?",

            options: [
                "class",
                "object",
                "new",
                "create"
            ],

            answer: 2
        },

        {
            question:
                "Which concept allows the same method name with different parameters?",

            options: [
                "Inheritance",
                "Overloading",
                "Encapsulation",
                "Abstraction"
            ],

            answer: 1
        },

        {
            question:
                "Which access modifier makes a member visible only within its own class?",

            options: [
                "public",
                "protected",
                "private",
                "default"
            ],

            answer: 2
        },

        {
            question:
                "What is the default value of an int variable in Java?",

            options: [
                "null",
                "0",
                "undefined",
                "-1"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword prevents a class from being inherited?",

            options: [
                "static",
                "abstract",
                "final",
                "sealed"
            ],

            answer: 2
        },

        {
            question:
                "Which interface must be implemented for sorting objects in Java?",

            options: [
                "Serializable",
                "Comparable",
                "Iterable",
                "Cloneable"
            ],

            answer: 1
        },

        {
            question:
                "What does JVM stand for?",

            options: [
                "Java Variable Machine",
                "Java Virtual Machine",
                "Java Visual Manager",
                "Java Version Model"
            ],

            answer: 1
        }

    ],


    Python: [

        {
            question:
                "Which symbol is used for comments in Python?",

            options: [
                "//",
                "/*",
                "#",
                "<!--"
            ],

            answer: 2
        },

        {
            question:
                "Which data type stores key-value pairs?",

            options: [
                "List",
                "Tuple",
                "Dictionary",
                "Set"
            ],

            answer: 2
        },

        {
            question:
                "Which keyword defines a function?",

            options: [
                "function",
                "define",
                "def",
                "fun"
            ],

            answer: 2
        },

        {
            question:
                "Which function is used to find the length of a list?",

            options: [
                "length()",
                "size()",
                "len()",
                "count()"
            ],

            answer: 2
        },

        {
            question:
                "Which collection is immutable?",

            options: [
                "List",
                "Dictionary",
                "Set",
                "Tuple"
            ],

            answer: 3
        },

        {
            question:
                "What is the output of print(type(10.0))?",

            options: [
                "<class 'int'>",
                "<class 'float'>",
                "<class 'double'>",
                "<class 'number'>"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword is used to handle exceptions in Python?",

            options: [
                "catch",
                "except",
                "handle",
                "error"
            ],

            answer: 1
        },

        {
            question:
                "What does the 'self' keyword refer to in a Python class?",

            options: [
                "The parent class",
                "The current instance",
                "A global variable",
                "The class name"
            ],

            answer: 1
        },

        {
            question:
                "Which method adds an element to the end of a list?",

            options: [
                "add()",
                "insert()",
                "append()",
                "push()"
            ],

            answer: 2
        },

        {
            question:
                "What does 'pip' stand for in Python?",

            options: [
                "Python Install Packages",
                "Pip Installs Packages",
                "Package Installer for Python",
                "Python Internal Package"
            ],

            answer: 2
        }

    ],


    SQL: [

        {
            question:
                "Which SQL command is used to retrieve data?",

            options: [
                "GET",
                "SELECT",
                "FETCH",
                "SHOW"
            ],

            answer: 1
        },

        {
            question:
                "Which clause is used to filter rows?",

            options: [
                "ORDER BY",
                "GROUP BY",
                "WHERE",
                "HAVING"
            ],

            answer: 2
        },

        {
            question:
                "Which command removes a table completely?",

            options: [
                "DELETE",
                "REMOVE",
                "DROP",
                "CLEAR"
            ],

            answer: 2
        },

        {
            question:
                "Which keyword removes duplicate rows from results?",

            options: [
                "UNIQUE",
                "DISTINCT",
                "DIFFERENT",
                "ONLY"
            ],

            answer: 1
        },

        {
            question:
                "Which SQL operation combines rows from two or more tables?",

            options: [
                "JOIN",
                "MERGE",
                "COMBINE",
                "CONNECT"
            ],

            answer: 0
        },

        {
            question:
                "Which aggregate function returns the total number of rows?",

            options: [
                "SUM()",
                "TOTAL()",
                "COUNT()",
                "NUM()"
            ],

            answer: 2
        },

        {
            question:
                "Which SQL statement is used to update existing data?",

            options: [
                "MODIFY",
                "CHANGE",
                "ALTER",
                "UPDATE"
            ],

            answer: 3
        },

        {
            question:
                "Which type of JOIN returns all rows from the left table?",

            options: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "CROSS JOIN"
            ],

            answer: 1
        },

        {
            question:
                "Which clause is used to sort query results?",

            options: [
                "SORT BY",
                "ORDER BY",
                "ARRANGE BY",
                "GROUP BY"
            ],

            answer: 1
        },

        {
            question:
                "Which constraint ensures all values in a column are different?",

            options: [
                "PRIMARY KEY",
                "CHECK",
                "UNIQUE",
                "NOT NULL"
            ],

            answer: 2
        }

    ],


    DBMS: [

        {
            question:
                "What does ACID stand for?",

            options: [
                "Atomicity, Consistency, Isolation, Durability",
                "Access, Control, Index, Data",
                "Atomic, Control, Integrity, Data",
                "Access, Consistency, Isolation, Database"
            ],

            answer: 0
        },

        {
            question:
                "Which normal form removes partial dependency?",

            options: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],

            answer: 1
        },

        {
            question:
                "Which key uniquely identifies a record?",

            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Composite Key"
            ],

            answer: 1
        },

        {
            question:
                "Which model represents entities and relationships?",

            options: [
                "ER Model",
                "Network Model",
                "Object Model",
                "Hierarchical Model"
            ],

            answer: 0
        },

        {
            question:
                "A foreign key references which key in another table?",

            options: [
                "Primary Key",
                "Alternate Key",
                "Super Key",
                "Composite Key"
            ],

            answer: 0
        },

        {
            question:
                "Which type of database stores data in tables with rows and columns?",

            options: [
                "NoSQL Database",
                "Relational Database",
                "Graph Database",
                "Document Database"
            ],

            answer: 1
        },

        {
            question:
                "What is a deadlock in DBMS?",

            options: [
                "A fast query execution",
                "Two transactions waiting for each other indefinitely",
                "A type of index",
                "A backup mechanism"
            ],

            answer: 1
        },

        {
            question:
                "Which language is used to define database schema?",

            options: [
                "DML",
                "DDL",
                "DCL",
                "TCL"
            ],

            answer: 1
        },

        {
            question:
                "What is normalization in DBMS?",

            options: [
                "Adding redundant data",
                "Organizing data to reduce redundancy",
                "Deleting unused tables",
                "Encrypting data"
            ],

            answer: 1
        },

        {
            question:
                "Which DBMS concept ensures that a transaction is treated as a single unit?",

            options: [
                "Consistency",
                "Isolation",
                "Atomicity",
                "Durability"
            ],

            answer: 2
        }

    ],


    "Web Development": [

        {
            question:
                "Which HTML tag creates a hyperlink?",

            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],

            answer: 1
        },

        {
            question:
                "Which CSS property changes text color?",

            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],

            answer: 2
        },

        {
            question:
                "Which language makes a webpage interactive?",

            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],

            answer: 2
        },

        {
            question:
                "Which CSS property is used to create rounded corners?",

            options: [
                "corner-radius",
                "border-radius",
                "round-border",
                "radius"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword declares a constant in JavaScript?",

            options: [
                "constant",
                "let",
                "var",
                "const"
            ],

            answer: 3
        },

        {
            question:
                "Which HTML tag is used to define an unordered list?",

            options: [
                "<ol>",
                "<list>",
                "<ul>",
                "<li>"
            ],

            answer: 2
        },

        {
            question:
                "What does CSS stand for?",

            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],

            answer: 2
        },

        {
            question:
                "Which JavaScript method selects an element by its ID?",

            options: [
                "getElement()",
                "querySelector()",
                "getElementById()",
                "findElement()"
            ],

            answer: 2
        },

        {
            question:
                "Which CSS display value hides an element completely?",

            options: [
                "hidden",
                "invisible",
                "none",
                "collapse"
            ],

            answer: 2
        },

        {
            question:
                "Which HTML attribute specifies an alternate text for an image?",

            options: [
                "title",
                "src",
                "alt",
                "description"
            ],

            answer: 2
        }

    ],


    DSA: [

        {
            question:
                "Which data structure follows LIFO?",

            options: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],

            answer: 1
        },

        {
            question:
                "Which data structure follows FIFO?",

            options: [
                "Stack",
                "Tree",
                "Queue",
                "Heap"
            ],

            answer: 2
        },

        {
            question:
                "What is the average time complexity of binary search?",

            options: [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],

            answer: 1
        },

        {
            question:
                "Which traversal visits root between left and right subtree?",

            options: [
                "Preorder",
                "Postorder",
                "Inorder",
                "Level order"
            ],

            answer: 2
        },

        {
            question:
                "Which structure is commonly used to represent hierarchical data?",

            options: [
                "Tree",
                "Queue",
                "Stack",
                "Array"
            ],

            answer: 0
        },

        {
            question:
                "What is the worst-case time complexity of bubble sort?",

            options: [
                "O(n)",
                "O(n log n)",
                "O(n²)",
                "O(log n)"
            ],

            answer: 2
        },

        {
            question:
                "Which data structure uses a hash function to map keys to values?",

            options: [
                "Array",
                "Linked List",
                "Hash Table",
                "Binary Tree"
            ],

            answer: 2
        },

        {
            question:
                "What is the maximum number of children a binary tree node can have?",

            options: [
                "1",
                "2",
                "3",
                "Unlimited"
            ],

            answer: 1
        },

        {
            question:
                "Which algorithm is used to find the shortest path in a weighted graph?",

            options: [
                "DFS",
                "BFS",
                "Dijkstra's",
                "Bubble Sort"
            ],

            answer: 2
        },

        {
            question:
                "Which data structure is used in recursion internally?",

            options: [
                "Queue",
                "Stack",
                "Array",
                "Heap"
            ],

            answer: 1
        }

    ]

};

/* =====================================================
   QUIZAPI.IO  –  FETCH & TRANSFORM
===================================================== */

/**
 * Fetches 10 questions from QuizAPI.io for the
 * given subject.  For subjects mapped to multiple
 * category slugs the requests run in parallel and
 * results are merged, shuffled, and de-duplicated.
 *
 * Returns an array of { question, options, answer }
 * objects (same shape as quizData entries).
 *
 * Throws on network error or if fewer than 10
 * usable questions are returned.
 */
async function fetchAPIQuestions(subject) {

    const subjectSlug =
        subject.toLowerCase().replace(/\s+/g, "-");

    /* --- check Firestore cache first (24h TTL) --- */
    try {

        if (typeof db !== "undefined") {

            const cacheDoc =
                await db.collection("cachedQuestions")
                    .doc(subjectSlug)
                    .get();

            if (cacheDoc.exists) {

                const cacheData = cacheDoc.data();

                const now = Date.now();

                const fetchedAt =
                    cacheData.fetchedAt
                        ? (cacheData.fetchedAt.toMillis
                            ? cacheData.fetchedAt.toMillis()
                            : new Date(cacheData.fetchedAt).getTime())
                        : 0;

                const ONE_DAY = 24 * 60 * 60 * 1000;

                if (
                    now - fetchedAt < ONE_DAY &&
                    Array.isArray(cacheData.questions) &&
                    cacheData.questions.length >= 10
                ) {

                    console.log(`Using Firestore cached questions for ${subject}`);

                    const shuffled = [...cacheData.questions];

                    for (let i = shuffled.length - 1; i > 0; i--) {

                        const j = Math.floor(Math.random() * (i + 1));

                        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

                    }

                    return shuffled.slice(0, 10);

                }

            }

        }

    } catch (cacheErr) {

        console.warn("Could not read Firestore question cache:", cacheErr);

    }

    const slugs =
        SUBJECT_API_MAP[subject];

    if (!slugs) {
        throw new Error(
            "No API mapping for " + subject
        );
    }

    /* --- build one fetch per slug --- */

    const fetches =
        slugs.map(slug => {

            const url =
                `${QUIZ_API_BASE}?categorySlug=${slug}&limit=20`;

            return fetch(url, {
                headers: {
                    "Authorization":
                        "Bearer " + QUIZ_API_KEY
                }
            }).then(res => {

                if (!res.ok) {
                    throw new Error(
                        `API ${res.status}`
                    );
                }

                return res.json();

            });

        });

    /* --- run in parallel, extract data arrays --- */

    const responses =
        await Promise.all(fetches);

    /*
        The API wraps questions in:
        { success: true, data: [ ...questions... ], meta: {...} }
        Each question has:
        {
            text: "...",
            answers: [
                { id, text, isCorrect: true/false },
                ...
            ]
        }
    */

    const raw = [];

    for (const res of responses) {

        if (res && res.data && Array.isArray(res.data)) {

            raw.push(...res.data);

        } else if (Array.isArray(res)) {

            /* fallback in case API returns a flat array */
            raw.push(...res);

        }

    }

    /* --- transform to internal format --- */

    const seen = new Set();

    const transformed = [];

    for (const q of raw) {

        /* question text is in 'text' or 'question' */

        const questionText =
            (q.text || q.question || "").trim();

        if (!questionText) continue;

        /* skip duplicates */

        const key =
            questionText.toLowerCase();

        if (seen.has(key)) continue;

        seen.add(key);

        /* parse answers array */

        const answers = q.answers;

        if (!answers || !Array.isArray(answers)) continue;

        const options = [];

        let correctIndex = -1;

        for (const ans of answers) {

            if (ans && ans.text) {

                if (ans.isCorrect === true) {

                    correctIndex = options.length;

                }

                options.push(ans.text);

            }

        }

        /* need at least 2 options and a correct answer */

        if (options.length < 2) continue;

        if (correctIndex === -1) continue;

        transformed.push({
            question: questionText,
            options: options,
            answer: correctIndex
        });

    }

    /* --- shuffle (Fisher–Yates) --- */

    for (
        let i = transformed.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [transformed[i], transformed[j]] =
            [transformed[j], transformed[i]];

    }

    /* --- take first 10 --- */

    if (transformed.length < 10) {

        throw new Error(
            `Only ${transformed.length} unique questions available`
        );

    }

    /* --- save to Firestore cache --- */
    try {

        if (typeof db !== "undefined") {

            db.collection("cachedQuestions")
                .doc(subjectSlug)
                .set({
                    subject: subject,
                    questions: transformed,
                    fetchedAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    console.log(`Saved ${transformed.length} questions to Firestore cache for ${subject}`);
                })
                .catch(err => {
                    console.warn("Firestore question cache write failed:", err);
                });

        }

    } catch (saveCacheErr) {

        console.warn("Could not initiate Firestore question cache write:", saveCacheErr);

    }

    return transformed.slice(0, 10);

}

/* =====================================================
   LOADING OVERLAY  &  TOAST HELPERS
===================================================== */

function showLoading(msg) {

    const overlay =
        document.getElementById(
            "loadingOverlay"
        );

    const text =
        document.getElementById(
            "loadingText"
        );

    if (msg && (msg.includes(" ") || msg.endsWith("..."))) {

        text.textContent = msg;

    } else {

        text.textContent =
            `Loading ${msg} questions...`;

    }

    overlay.classList.remove("hidden");

}

function hideLoading() {

    document.getElementById(
        "loadingOverlay"
    ).classList.add("hidden");

}

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}

/* =====================================================
   VARIABLES
===================================================== */

let currentQuestion = 0;

let selectedAnswers = [];

let selectedSubject = "";

let timeLeft = 60;

let timerInterval = null;

let isRegisterMode = false;

/* =====================================================
   USER & APP STATE (Firebase)
===================================================== */

let currentUser = null; // Firebase Auth user object
let userData = null;    // Firestore user document data
let quizHistory = [];   // Loaded from Firestore
let currentStreak = 0;
let bestStreak = 0;

/* =====================================================
   AUTH ERROR HELPER
===================================================== */

function getAuthErrorMessage(code) {

    switch (code) {

        case "auth/invalid-email":
            return "Please enter a valid email address.";

        case "auth/user-disabled":
            return "This account has been disabled.";

        case "auth/user-not-found":
            return "No account found with this email. Please register.";

        case "auth/wrong-password":
            return "Incorrect password. Please try again.";

        case "auth/invalid-credential":
            return "Invalid email or password. Please check your credentials.";

        case "auth/email-already-in-use":
            return "An account with this email already exists. Please login.";

        case "auth/weak-password":
            return "Password should be at least 6 characters.";

        case "auth/operation-not-allowed":
            return "Email/Password sign-in is disabled in Firebase Console. Please enable it under Authentication > Sign-in method.";

        case "auth/network-request-failed":
            return "Network error. Please check your internet connection.";

        default:
            return null;

    }

}

/* =====================================================
   AUTH MODE
===================================================== */

function toggleAuth() {

    isRegisterMode =
        !isRegisterMode;

    const title =
        document.getElementById("authTitle");

    const subtitle =
        document.getElementById("authSubtitle");

    const nameGroup =
        document.getElementById("nameGroup");

    const button =
        document.querySelector(".full-btn");

    const switchText =
        document.getElementById("switchText");

    if (isRegisterMode) {

        title.textContent =
            "Create Account";

        subtitle.textContent =
            "Join QuizMaster and start learning.";

        nameGroup.classList.remove("hidden");

        button.textContent =
            "Create Account 🚀";

        switchText.textContent =
            "Already have an account?";

        document.querySelector(
            ".switch-auth button"
        ).textContent = "Login";

    } else {

        title.textContent =
            "Welcome Back!";

        subtitle.textContent =
            "Login to continue your learning journey.";

        nameGroup.classList.add("hidden");

        button.textContent =
            "Login 🚀";

        switchText.textContent =
            "Don't have an account?";

        document.querySelector(
            ".switch-auth button"
        ).textContent = "Register";

    }

    document.getElementById("authError")
        .textContent = "";

}

/* =====================================================
   LOGIN / REGISTER (Firebase Auth)
===================================================== */

async function handleAuth() {

    const email =
        document.getElementById("username")
            .value.trim();

    const password =
        document.getElementById("password")
            .value.trim();

    const error =
        document.getElementById("authError");

    if (!email || !password) {

        error.style.color = "#ef4444";
        error.textContent =
            "Please enter email and password.";

        return;

    }

    if (isRegisterMode) {

        const name =
            document.getElementById("registerName")
                .value.trim();

        if (!name) {

            error.style.color = "#ef4444";
            error.textContent =
                "Please enter your full name.";

            return;

        }

        try {

            showLoading("Creating your account...");

            const credential =
                await auth.createUserWithEmailAndPassword(email, password);

            const user = credential.user;

            await user.updateProfile({
                displayName: name
            });

            // Initialize user doc in Firestore
            const initialDoc = {
                name: name,
                email: email,
                currentStreak: 0,
                bestStreak: 0,
                totalQuizzes: 0,
                averageScore: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await db.collection("users").doc(user.uid).set(initialDoc);

            hideLoading();

            error.style.color = "#16a34a";
            error.textContent = "Account created successfully!";

            // onAuthStateChanged will load user data and show the app

        } catch (err) {

            hideLoading();

            console.error("Registration error:", err);

            error.style.color = "#ef4444";

            error.textContent =
                getAuthErrorMessage(err.code) || err.message;

        }

    } else {

        try {

            showLoading("Signing in...");

            await auth.signInWithEmailAndPassword(email, password);

            hideLoading();

            // onAuthStateChanged will load user data and show the app

        } catch (err) {

            hideLoading();

            console.error("Login error:", err);

            error.style.color = "#ef4444";

            error.textContent =
                getAuthErrorMessage(err.code) || err.message;

        }

    }

}

/* =====================================================
   LOAD USER DATA (Firestore)
===================================================== */

async function loadUserData(user) {

    currentUser = user;

    try {

        const docRef = db.collection("users").doc(user.uid);
        const docSnap = await docRef.get();

        if (docSnap.exists) {

            userData = {
                uid: user.uid,
                ...docSnap.data()
            };

        } else {

            // Create initial user doc if missing
            userData = {
                uid: user.uid,
                name: user.displayName || user.email.split("@")[0],
                email: user.email,
                currentStreak: 0,
                bestStreak: 0,
                totalQuizzes: 0,
                averageScore: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await docRef.set(userData);

        }

        currentStreak = userData.currentStreak || 0;
        bestStreak = userData.bestStreak || 0;

        // Fetch user quiz history from Firestore
        try {

            const historySnap = await db.collection("quizHistory")
                .where("userId", "==", user.uid)
                .get();

            quizHistory = [];

            historySnap.forEach(doc => {

                quizHistory.push({
                    id: doc.id,
                    ...doc.data()
                });

            });

            // Sort chronologically so displayHistory reverse() shows latest first
            quizHistory.sort((a, b) => {

                const tA =
                    a.timestamp && a.timestamp.toMillis
                        ? a.timestamp.toMillis()
                        : (a.date ? new Date(a.date).getTime() : 0);

                const tB =
                    b.timestamp && b.timestamp.toMillis
                        ? b.timestamp.toMillis()
                        : (b.date ? new Date(b.date).getTime() : 0);

                return tA - tB;

            });

        } catch (histErr) {

            console.warn("Could not fetch quiz history from Firestore:", histErr);

            quizHistory = [];

        }

        // Update UI
        document.getElementById("studentName")
            .textContent = userData.name || "Student";

        document.getElementById("navUser")
            .textContent = userData.name || "Student";

        document.getElementById("loginPage")
            .classList.add("hidden");

        document.getElementById("app")
            .classList.remove("hidden");

        showPage("dashboard");

    } catch (err) {

        console.error("Error loading user profile from Firestore:", err);

        showToast("⚠️ Could not load profile from cloud");

    }

}

/* =====================================================
   LOGOUT (Firebase Auth)
===================================================== */

async function logout() {

    clearInterval(timerInterval);

    try {

        await auth.signOut();

    } catch (err) {

        console.warn("SignOut error:", err);

    }

    currentUser = null;
    userData = null;
    quizHistory = [];
    currentStreak = 0;
    bestStreak = 0;

    document.getElementById("app")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("authError").textContent = "";

}

/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add("active");
    }

    window.scrollTo(0, 0);

    updateDashboard();

    if (pageId === "history") {

        displayHistory();

    } else if (pageId === "leaderboard") {

        displayLeaderboard();

    }

}

/* =====================================================
   SUBJECT SELECTION  (async – fetches from API)
===================================================== */

/*
    Keep a copy of the original hardcoded questions
    so we can restore them after each quiz.
*/
const fallbackQuizData = {};

Object.keys(quizData).forEach(subj => {

    fallbackQuizData[subj] =
        [...quizData[subj]];

});

async function selectSubject(subject) {

    selectedSubject = subject;

    showLoading(subject);

    try {

        const apiQuestions =
            await fetchAPIQuestions(subject);

        /* replace with fresh API questions */

        quizData[subject] = apiQuestions;

    } catch (err) {

        console.warn(
            "API fetch failed, using fallback:",
            err.message
        );

        /* restore original hardcoded questions */

        quizData[subject] =
            [...fallbackQuizData[subject]];

        showToast(
            "⚠️ Using practice questions (API unavailable)"
        );

    }

    hideLoading();

    startSelectedQuiz();

}

/* =====================================================
   START QUIZ
===================================================== */

function startSelectedQuiz() {

    if (!selectedSubject) {

        showPage("subjects");

        return;

    }

    currentQuestion = 0;

    selectedAnswers =
        new Array(
            quizData[selectedSubject].length
        ).fill(null);

    timeLeft = 60;

    document.getElementById("quizSubject")
        .textContent =
        selectedSubject;

    showPage("quiz");

    startTimer();

    loadQuestion();

}

/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    clearInterval(timerInterval);

    document.getElementById("timer")
        .textContent =
        timeLeft;

    timerInterval =
        setInterval(() => {

            timeLeft--;

            document.getElementById("timer")
                .textContent =
                timeLeft;

            if (timeLeft <= 10) {

                document.getElementById("timer")
                    .style.color =
                    "#ef4444";

            }

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishQuiz();

            }

        }, 1000);

}

/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    const questions =
        quizData[selectedSubject];

    const question =
        questions[currentQuestion];

    document.getElementById("question")
        .textContent =
        question.question;

    document.getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;

    document.getElementById("quizProgress")
        .style.width =
        progress + "%";

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const div =
                document.createElement("div");

            div.className =
                "option";

            div.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;

            if (
                selectedAnswers[currentQuestion]
                === index
            ) {

                div.classList.add("selected");

            }

            div.onclick = () => {

                selectedAnswers[currentQuestion] =
                    index;

                document
                    .querySelectorAll(".option")
                    .forEach(item =>
                        item.classList.remove(
                            "selected"
                        )
                    );

                div.classList.add("selected");

            };

            optionsContainer.appendChild(div);

        }
    );

    document.getElementById("previousBtn")
        .style.visibility =
        currentQuestion === 0
            ? "hidden"
            : "visible";

    document.getElementById("nextBtn")
        .textContent =
        currentQuestion ===
            questions.length - 1
            ? "Finish Quiz 🎯"
            : "Next →";

}

/* =====================================================
   NEXT
===================================================== */

function nextQuestion() {

    if (
        selectedAnswers[currentQuestion]
        === null
    ) {

        alert(
            "Please select an answer first!"
        );

        return;

    }

    const questions =
        quizData[selectedSubject];

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishQuiz();

    }

}

/* =====================================================
   PREVIOUS
===================================================== */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}

/* =====================================================
   FINISH QUIZ
===================================================== */

async function finishQuiz() {

    clearInterval(timerInterval);

    const questions =
        quizData[selectedSubject];

    let correct = 0;

    questions.forEach(
        (question, index) => {

            if (
                selectedAnswers[index]
                === question.answer
            ) {

                correct++;

            }

        }
    );

    const score =
        Math.round(
            (correct / questions.length) * 100
        );

    const grade =
        getGrade(score);

    updateStreak(score);

    const now = new Date();

    const result = {

        subject:
            selectedSubject,

        score:
            score,

        grade:
            grade,

        correct:
            correct,

        wrong:
            questions.length - correct,

        streak:
            currentStreak,

        date:
            now.toLocaleString(),

        userId:
            currentUser ? currentUser.uid : null,

        userName:
            userData ? userData.name : "Student",

        timestamp:
            firebase.firestore.FieldValue.serverTimestamp()

    };

    quizHistory.push(result);

    // Save result to Firestore
    if (currentUser && typeof db !== "undefined") {

        try {

            await db.collection("quizHistory").add(result);

            const totalQuizzes = quizHistory.length;

            const totalScore =
                quizHistory.reduce(
                    (sum, quiz) => sum + (quiz.score || 0),
                    0
                );

            const averageScore =
                totalQuizzes > 0
                    ? Math.round(totalScore / totalQuizzes)
                    : 0;

            await db.collection("users").doc(currentUser.uid).update({
                currentStreak: currentStreak,
                bestStreak: bestStreak,
                totalQuizzes: totalQuizzes,
                averageScore: averageScore
            });

            if (userData) {

                userData.currentStreak = currentStreak;
                userData.bestStreak = bestStreak;
                userData.totalQuizzes = totalQuizzes;
                userData.averageScore = averageScore;

            }

        } catch (saveErr) {

            console.error("Error saving quiz result to Firestore:", saveErr);

            showToast("⚠️ Could not sync quiz result to cloud");

        }

    }

    showResult(result);

}

/* =====================================================
   GRADE SYSTEM
===================================================== */

function getGrade(score) {

    if (score >= 90)
        return "A+";

    if (score >= 80)
        return "A";

    if (score >= 70)
        return "B+";

    if (score >= 60)
        return "B";

    if (score >= 50)
        return "C";

    return "F";

}

/* =====================================================
   STREAK SYSTEM
===================================================== */

function updateStreak(score) {

    /*
        90-100 = +2
        75-89  = +1
        50-74  = maintain
        Below50 = reset
    */

    if (score >= 90) {

        currentStreak += 2;

    }

    else if (score >= 75) {

        currentStreak += 1;

    }

    else if (score >= 50) {

        // Streak maintained
        currentStreak =
            currentStreak;

    }

    else {

        currentStreak = 0;

    }

    if (
        currentStreak >
        bestStreak
    ) {

        bestStreak =
            currentStreak;

    }

}

/* =====================================================
   SHOW RESULT
===================================================== */

function showResult(result) {

    document.getElementById("resultSubject")
        .textContent =
        result.subject;

    document.getElementById("finalScore")
        .textContent =
        result.score + "%";

    document.getElementById("finalGrade")
        .textContent =
        result.grade;

    document.getElementById("correctAnswers")
        .textContent =
        result.correct;

    document.getElementById("wrongAnswers")
        .textContent =
        result.wrong;

    document.getElementById("finalStreak")
        .textContent =
        result.streak;

    let message;

    if (result.score >= 90) {

        message =
            "🔥 Outstanding! You are absolutely on fire!";

        createConfetti();

    }

    else if (result.score >= 80) {

        message =
            "🌟 Excellent performance! Keep going!";

    }

    else if (result.score >= 70) {

        message =
            "🚀 Great job! Your knowledge is improving.";

    }

    else if (result.score >= 50) {

        message =
            "👍 Good effort! Practice more to improve.";

    }

    else {

        message =
            "💪 Don't give up! Try again and improve.";

    }

    document.getElementById("resultMessage")
        .textContent =
        message;

    showPage("result");

}

/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    if (!userData)
        return;

    document.getElementById("currentStreak")
        .textContent =
        currentStreak;

    document.getElementById("bestStreak")
        .textContent =
        bestStreak;

    document.getElementById("quizCount")
        .textContent =
        quizHistory.length;

    let average = 0;

    if (quizHistory.length > 0) {

        const total =
            quizHistory.reduce(
                (sum, quiz) =>
                    sum + quiz.score,
                0
            );

        average =
            Math.round(
                total / quizHistory.length
            );

    }

    document.getElementById("averageScore")
        .textContent =
        average + "%";

    document.getElementById("heroGrade")
        .textContent =
        average > 0
            ? getGrade(average)
            : "-";

    document.getElementById("streakDisplay")
        .textContent =
        currentStreak;

    const progress =
        Math.min(
            (currentStreak / 10) * 100,
            100
        );

    document.getElementById("streakProgress")
        .style.width =
        progress + "%";

    updateStreakMessage();

    updateBadges();

    updateSubjectPerformance();

}

/* =====================================================
   STREAK MESSAGE
===================================================== */

function updateStreakMessage() {

    const message =
        document.getElementById(
            "streakMessage"
        );

    if (currentStreak === 0) {

        message.textContent =
            "Complete a quiz to start your streak!";

    }

    else if (currentStreak < 5) {

        message.textContent =
            `${5 - currentStreak} more streak points to unlock On Fire! 🔥`;

    }

    else if (currentStreak < 10) {

        message.textContent =
            `${10 - currentStreak} more streak points to become a Quiz Master! 👑`;

    }

    else {

        message.textContent =
            "You're officially a Quiz Master! 👑🔥";

    }

}

/* =====================================================
   SUBJECT PERFORMANCE
===================================================== */

function updateSubjectPerformance() {

    const container =
        document.getElementById(
            "subjectPerformance"
        );

    container.innerHTML = "";

    Object.keys(quizData)
        .forEach(subject => {

            const attempts =
                quizHistory.filter(
                    quiz =>
                        quiz.subject === subject
                );

            let average = 0;

            if (attempts.length > 0) {

                average =
                    Math.round(
                        attempts.reduce(
                            (sum, quiz) =>
                                sum + quiz.score,
                            0
                        ) / attempts.length
                    );

            }

            const card =
                document.createElement("div");

            card.className =
                "performance-card";

            card.innerHTML = `

                <h3>${subject}</h3>

                <div class="performance-score">
                    ${average}%
                </div>

                <p>
                    ${attempts.length}
                    quiz${attempts.length === 1 ? "" : "zes"}
                    completed
                </p>

            `;

            container.appendChild(card);

        });

}

/* =====================================================
   BADGES
===================================================== */

function updateBadges() {

    const beginner =
        document.getElementById(
            "badgeBeginner"
        );

    const perfect =
        document.getElementById(
            "badgePerfect"
        );

    const fire =
        document.getElementById(
            "badgeFire"
        );

    const master =
        document.getElementById(
            "badgeMaster"
        );

    if (quizHistory.length >= 1) {

        unlockBadge(beginner);

    }

    if (
        quizHistory.some(
            quiz =>
                quiz.score === 100
        )
    ) {

        unlockBadge(perfect);

    }

    if (currentStreak >= 5) {

        unlockBadge(fire);

    }

    if (currentStreak >= 10) {

        unlockBadge(master);

    }

}

function unlockBadge(element) {

    element.classList.remove(
        "locked"
    );

    element.classList.add(
        "unlocked"
    );

}

/* =====================================================
   HISTORY
===================================================== */

function displayHistory() {

    const container =
        document.getElementById(
            "historyList"
        );

    if (quizHistory.length === 0) {

        container.innerHTML = `

            <div class="empty-history">

                No quizzes completed yet.
                Start your first quiz! 🚀

            </div>

        `;

        return;

    }

    container.innerHTML = "";

    [...quizHistory]
        .reverse()
        .forEach(
            (quiz, index) => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "history-item";

                item.innerHTML = `

                    <div>

                        <strong>
                            ${quiz.subject}
                        </strong>

                        <div class="history-date">
                            ${quiz.date}
                        </div>

                    </div>

                    <div>

                        <div class="history-score">
                            ${quiz.score}%
                        </div>

                        <small>
                            Grade ${quiz.grade}
                        </small>

                    </div>

                    <div>

                        ✓ ${quiz.correct}
                        &nbsp;&nbsp;

                        ✗ ${quiz.wrong}

                        <br>

                        🔥 ${quiz.streak}

                    </div>

                `;

                container.appendChild(
                    item
                );

            }
        );

}

/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body
        .classList.toggle("dark");

    const darkMode =
        document.body
            .classList
            .contains("dark");

    localStorage.setItem(
        "darkMode",
        darkMode
    );

}

if (
    localStorage.getItem(
        "darkMode"
    ) === "true"
) {

    document.body
        .classList
        .add("dark");

}

/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            `hsl(
                ${Math.random() * 360},
                80%,
                60%
            )`;

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(
            piece
        );

    }

    setTimeout(
        () => {

            container.innerHTML = "";

        },
        4000
    );

}

/* =====================================================
   LEADERBOARD (Firestore)
===================================================== */

async function displayLeaderboard() {

    const container =
        document.getElementById("leaderboardList");

    if (!container) return;

    container.innerHTML = `
        <div class="leaderboard-empty">
            Loading leaderboard... ⏳
        </div>
    `;

    try {

        const snapshot = await db.collection("users")
            .orderBy("averageScore", "desc")
            .limit(10)
            .get();

        if (snapshot.empty) {

            container.innerHTML = `
                <div class="leaderboard-empty">
                    No leaderboard data available yet. Complete a quiz to appear here! 🚀
                </div>
            `;

            return;

        }

        let html = `
            <table class="leaderboard-table">
                <thead>
                    <tr>
                        <th style="width: 80px;">Rank</th>
                        <th>Student</th>
                        <th style="text-align: center;">Quizzes</th>
                        <th style="text-align: center;">Streak</th>
                        <th style="text-align: right;">Avg Score</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let rank = 1;

        snapshot.forEach(doc => {

            const data = doc.data();

            const isCurrentUser =
                currentUser && currentUser.uid === doc.id;

            const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };

            const rankDisplay =
                medals[rank] ? `${medals[rank]} ${rank}` : rank;

            const initial =
                (data.name || "S").charAt(0).toUpperCase();

            html += `
                <tr class="${isCurrentUser ? 'current-user-row' : ''}">
                    <td>
                        <div class="leaderboard-rank leaderboard-rank-${rank}">
                            ${rankDisplay}
                        </div>
                    </td>
                    <td>
                        <span class="leaderboard-avatar">${initial}</span>
                        <strong>${data.name || 'Student'}</strong>
                        ${isCurrentUser ? ' <small style="color:var(--primary); font-weight: 700;">(You)</small>' : ''}
                    </td>
                    <td style="text-align: center;">
                        ${data.totalQuizzes || 0}
                    </td>
                    <td style="text-align: center;">
                        🔥 ${data.currentStreak || 0}
                    </td>
                    <td style="text-align: right; font-weight: 800; color: var(--primary);">
                        ${data.averageScore || 0}%
                    </td>
                </tr>
            `;

            rank++;

        });

        html += `
                </tbody>
            </table>
        `;

        container.innerHTML = html;

    } catch (err) {

        console.error("Error loading leaderboard:", err);

        container.innerHTML = `
            <div class="leaderboard-empty">
                ⚠️ Could not load leaderboard. (${err.message})
            </div>
        `;

    }

}

/* =====================================================
   AUTH STATE LISTENER (Firebase Auth)
===================================================== */

if (typeof auth !== "undefined") {

    auth.onAuthStateChanged(async (user) => {

        // Firebase keeps one signed-in user per browser; a student login in another tab replaces the teacher's.
        const teacherApp = document.getElementById("teacherApp");
        if (currentTeacher && teacherApp && !teacherApp.classList.contains("hidden") && (!user || user.uid !== currentTeacher.uid)) {
            console.warn("[QUIZ DEBUG] Firebase user changed away from the signed-in teacher:", user ? user.uid : "(signed out)");
            showToast("⚠️ Your teacher session was replaced by another login in this browser. Log out and sign in again as staff.");
        }

        // Anonymous accounts only identify live-competition players; they have no student profile.
        if (user && !user.isAnonymous) {

            showLoading("Loading your profile...");

            await loadUserData(user);

            hideLoading();

        } else {

            // Only show loginPage if not in teacher portal or student live quiz
            const liveApp = document.getElementById("studentLiveApp");
            const liveAppOpen = liveApp && !liveApp.classList.contains("hidden");
            if (!currentTeacher && !currentStudentLiveSession && !liveAppOpen) {

                document.getElementById("app")
                    .classList.add("hidden");

                document.getElementById("loginPage")
                    .classList.remove("hidden");

            }

        }

    });

}

/* ==========================================================================
   ==========================================================================
   KAHOOT-STYLE LIVE QUIZ COMPETITION & TEACHER PORTAL MODULE
   ==========================================================================
   ========================================================================== */

/* =====================================================
   GLOBAL STATE FOR LIVE COMPETITION & TEACHER PORTAL
===================================================== */

let currentTeacher = null;
let isTeacherRegisterMode = false;
let activeHostCompetition = null; // Currently hosted competition object
let activeCompetitionQuestionsList = []; // Array of questions for active competition
let activeCurrentRoundDoc = null; // Active round document metadata

// Firestore listener unsubscriptions
let teacherUnsubCompetition = null;
let teacherUnsubParticipants = null;
let teacherUnsubAnswers = null;
let studentUnsubCompetition = null;
let studentUnsubParticipants = null;
let studentUnsubAnswers = null;

let currentStudentLiveSession = null; // Active joined student session

let liveTimerInterval = null;
let liveTimeRemaining = 60;

/* Default Demo Teacher Account */
const DEFAULT_TEACHER = {
    uid: "teacher_demo_001",
    teacherId: "TCH001",
    name: "Prof. Educator",
    email: "teacher@skillquest.edu",
    department: "Information Technology",
    role: "teacher",
    status: "active",
    phone: "+1 (555) 019-2834",
    profileImage: "",
    subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"]
};

/* =====================================================
   PORTAL NAVIGATION & SWITCHING
===================================================== */

function hideAllPortals() {
    // Hide student standard app
    const app = document.getElementById("app");
    if (app) app.classList.add("hidden");

    // Hide student login
    const loginPage = document.getElementById("loginPage");
    if (loginPage) loginPage.classList.add("hidden");

    // Hide teacher auth
    const teacherAuthPage = document.getElementById("teacherAuthPage");
    if (teacherAuthPage) teacherAuthPage.classList.add("hidden");

    // Hide teacher app
    const teacherApp = document.getElementById("teacherApp");
    if (teacherApp) teacherApp.classList.add("hidden");

    // Hide student live app
    const studentLiveApp = document.getElementById("studentLiveApp");
    if (studentLiveApp) studentLiveApp.classList.add("hidden");
}

function openTeacherAuth() {
    hideAllPortals();
    const page = document.getElementById("teacherAuthPage");
    if (page) {
        page.classList.remove("hidden");
        document.getElementById("teacherAuthError").textContent = "";
    }
}

function openStudentPortal() {
    hideAllPortals();
    if (currentUser) {
        document.getElementById("app").classList.remove("hidden");
        showPage("dashboard");
    } else {
        document.getElementById("loginPage").classList.remove("hidden");
    }
}

function toggleTeacherAuthMode() {
    isTeacherRegisterMode = !isTeacherRegisterMode;
    const heading = document.getElementById("teacherAuthHeading");
    const subtitle = document.getElementById("teacherAuthSubtitle");
    const regFields = document.getElementById("teacherRegisterFields");
    const submitBtn = document.getElementById("teacherAuthSubmitBtn");
    const switchText = document.getElementById("teacherSwitchText");
    const demoRow = document.getElementById("teacherDemoQuickRow");
    const emailLabel = document.getElementById("teacherEmailLabel");

    if (isTeacherRegisterMode) {
        if (heading) heading.textContent = "Teacher Registration";
        if (subtitle) subtitle.textContent = "Create an educator account to host live quizzes.";
        if (regFields) regFields.classList.remove("hidden");
        if (submitBtn) submitBtn.textContent = "Register & Enter Portal 🚀";
        if (switchText) switchText.textContent = "Already have a teacher account?";
        if (demoRow) demoRow.classList.add("hidden");
        if (emailLabel) emailLabel.textContent = "Teacher Email (for login)";
    } else {
        if (heading) heading.textContent = "Teacher Sign In";
        if (subtitle) subtitle.textContent = "Access your QuizMaster competition hub.";
        if (regFields) regFields.classList.add("hidden");
        if (submitBtn) submitBtn.textContent = "Access Teacher Portal 🚀";
        if (switchText) switchText.textContent = "Need a new teacher account?";
        if (demoRow) demoRow.classList.remove("hidden");
        if (emailLabel) emailLabel.textContent = "Teacher Email / ID";
    }
}

function quickFillTeacherDemo() {
    document.getElementById("teacherId").value = "teacher@skillquest.edu";
    document.getElementById("teacherPassword").value = "admin123";
    showToast("✨ Filled Demo Teacher Credentials!");
}

/* =====================================================
   TEACHER AUTHENTICATION (Firebase Auth & Firestore)
===================================================== */

async function handleTeacherLogin() {
    const errElem = document.getElementById("teacherAuthError");
    errElem.textContent = "";

    if (isTeacherRegisterMode) {
        await handleTeacherRegister();
        return;
    }

    const emailInput = document.getElementById("teacherId").value.trim();
    const passInput = document.getElementById("teacherPassword").value.trim();

    if (!emailInput || !passInput) {
        errElem.textContent = "Please enter both Email / Teacher ID and Password.";
        return;
    }

    showLoading("Authenticating Teacher...");

    try {
        let authUser = null;
        let teacherProfile = null;

        const isDemo = (emailInput.toLowerCase() === "teacher@skillquest.edu" || emailInput.toUpperCase() === "TEACHER-01" || emailInput.toUpperCase() === "TCH001") && passInput === "admin123";
        const targetEmail = isDemo ? "teacher@skillquest.edu" : emailInput;

        if (typeof auth !== "undefined") {
            try {
                const cred = await auth.signInWithEmailAndPassword(targetEmail, passInput);
                authUser = cred.user;
            } catch (authErr) {
                if (isDemo && (authErr.code === "auth/user-not-found" || authErr.code === "auth/invalid-credential" || authErr.code === "auth/wrong-password")) {
                    try {
                        const newCred = await auth.createUserWithEmailAndPassword("teacher@skillquest.edu", "admin123");
                        authUser = newCred.user;
                        await authUser.updateProfile({ displayName: "Prof. Educator" });
                    } catch (createErr) {
                        // The account exists with a different password (or creation is blocked):
                        // entering the portal without a Firebase identity would make every write fail.
                        console.warn("Demo teacher creation note:", createErr.code || createErr.message);
                        throw authErr;
                    }
                } else {
                    throw authErr;
                }
            }
        }

        const teacherUid = authUser ? authUser.uid : (isDemo ? "teacher_demo_001" : `teacher_${emailInput.replace(/[^a-zA-Z0-9]/g, "_")}`);

        if (typeof db !== "undefined") {
            try {
                const docRef = db.collection("teachers").doc(teacherUid);
                const docSnap = await docRef.get();

                if (docSnap.exists) {
                    const data = docSnap.data();
                    if (data.role !== "teacher" || data.status !== "active") {
                        hideLoading();
                        errElem.textContent = "Access denied: Account is not an active teacher.";
                        if (auth) auth.signOut();
                        return;
                    }
                    teacherProfile = { ...data, uid: teacherUid };
                    await docRef.update({
                        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                    });
                } else {
                    const newProfile = {
                        uid: teacherUid,
                        name: (authUser && authUser.displayName) || (isDemo ? "Prof. Educator" : emailInput.split("@")[0]),
                        email: targetEmail,
                        teacherId: isDemo ? "TCH001" : `TCH${Math.floor(100 + Math.random() * 900)}`,
                        department: "Information Technology",
                        role: "teacher",
                        status: "active",
                        phone: "",
                        profileImage: "",
                        subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"],
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await docRef.set(newProfile);
                    teacherProfile = newProfile;
                }
            } catch (dbErr) {
                console.warn("Firestore teacher fetch note:", dbErr);
                teacherProfile = {
                    uid: teacherUid,
                    name: isDemo ? "Prof. Educator" : emailInput.split("@")[0],
                    email: targetEmail,
                    teacherId: "TCH001",
                    department: "Information Technology",
                    role: "teacher",
                    status: "active",
                    subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"]
                };
            }
        } else {
            teacherProfile = { ...DEFAULT_TEACHER, uid: teacherUid };
        }

        currentTeacher = teacherProfile;
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));

        hideLoading();
        hideAllPortals();
        initTeacherPortalUI();
        document.getElementById("teacherApp").classList.remove("hidden");
        showTeacherPage("teacherDashboard");
        showToast(`👋 Welcome, ${currentTeacher.name}!`);

    } catch (err) {
        hideLoading();
        console.error("Teacher login error:", err);
        errElem.textContent = getAuthErrorMessage(err.code) || err.message;
    }
}

async function handleTeacherRegister() {
    const name = document.getElementById("teacherRegName").value.trim();
    const teacherIdCode = document.getElementById("teacherRegCode").value.trim();
    const dept = document.getElementById("teacherRegDept").value.trim();
    const email = document.getElementById("teacherId").value.trim();
    const password = document.getElementById("teacherPassword").value.trim();
    const errElem = document.getElementById("teacherAuthError");

    if (!name || !email || !password) {
        errElem.textContent = "Please fill in all required fields (Name, Email, Password).";
        return;
    }

    if (password.length < 6) {
        errElem.textContent = "Password must be at least 6 characters long.";
        return;
    }

    showLoading("Creating Teacher Account...");

    try {
        let authUser = null;

        if (typeof auth !== "undefined") {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            authUser = cred.user;
            await authUser.updateProfile({ displayName: name });
        }

        const uid = authUser ? authUser.uid : `teacher_${Date.now()}`;

        const teacherDoc = {
            uid: uid,
            name: name,
            email: email,
            teacherId: teacherIdCode || `TCH${Math.floor(100 + Math.random() * 900)}`,
            department: dept || "Computer Science & Engineering",
            role: "teacher",
            status: "active",
            phone: "",
            profileImage: "",
            subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"],
            createdAt: typeof firebase !== "undefined" && firebase.firestore
                ? firebase.firestore.FieldValue.serverTimestamp()
                : new Date().toISOString(),
            lastLogin: typeof firebase !== "undefined" && firebase.firestore
                ? firebase.firestore.FieldValue.serverTimestamp()
                : new Date().toISOString()
        };

        if (typeof db !== "undefined") {
            await db.collection("teachers").doc(uid).set(teacherDoc);
        }

        currentTeacher = teacherDoc;
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));

        hideLoading();
        hideAllPortals();
        initTeacherPortalUI();
        document.getElementById("teacherApp").classList.remove("hidden");
        showTeacherPage("teacherDashboard");
        showToast(`🎉 Account Created! Welcome, ${currentTeacher.name}!`);

    } catch (err) {
        hideLoading();
        console.error("Teacher register error:", err);
        errElem.textContent = getAuthErrorMessage(err.code) || err.message;
    }
}

function teacherLogout() {
    if (activeHostCompetition) {
        if (!confirm("Are you sure you want to logout? Any active competition session will be closed.")) {
            return;
        }
        cleanupActiveHostListeners();
        activeHostCompetition = null;
    }

    if (typeof auth !== "undefined") {
        try { auth.signOut(); } catch (e) { }
    }

    currentTeacher = null;
    localStorage.removeItem("skillquest_teacher");
    localStorage.removeItem("skillquest_active_competition");

    hideAllPortals();
    openTeacherAuth();
    showToast("Logged out of Teacher Portal.");
}

function initTeacherPortalUI() {
    if (!currentTeacher) return;

    const nameTag = document.getElementById("teacherNavUser");
    if (nameTag) nameTag.textContent = currentTeacher.name || "Professor";

    const heroName = document.getElementById("teacherHeroName");
    if (heroName) heroName.textContent = currentTeacher.name || "Professor";

    updateTeacherDashboardStats();
    restoreHostCompetition();
}

function showTeacherPage(pageId) {
    document.querySelectorAll(".teacher-page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add("active");
    }

    // Update navbar active state
    document.querySelectorAll(".teacher-navbar nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (pageId === "teacherDashboard") {
        const btn = document.getElementById("tNavDashboard");
        if (btn) btn.classList.add("active");
        updateTeacherDashboardStats();
    } else if (pageId === "teacherCreate") {
        const btn = document.getElementById("tNavCreate");
        if (btn) btn.classList.add("active");
        onSubjectConfigChange();
    } else if (pageId === "teacherHistory") {
        const btn = document.getElementById("tNavHistory");
        if (btn) btn.classList.add("active");
        loadTeacherCompetitionHistory();
    }

    window.scrollTo(0, 0);
}

/* =====================================================
   TEACHER PROFILE MODAL MANAGEMENT
===================================================== */

function openTeacherProfileModal() {
    if (!currentTeacher) return;

    document.getElementById("profNameInput").value = currentTeacher.name || "";
    document.getElementById("profTeacherIdInput").value = currentTeacher.teacherId || "TCH001";
    document.getElementById("profEmailInput").value = currentTeacher.email || "";
    document.getElementById("profDeptInput").value = currentTeacher.department || "";
    document.getElementById("profPhoneInput").value = currentTeacher.phone || "";
    document.getElementById("profSubjectsInput").value = Array.isArray(currentTeacher.subjects)
        ? currentTeacher.subjects.join(", ")
        : (currentTeacher.subjects || "Java, Python, SQL, DBMS, Web Development, DSA");
    document.getElementById("profSaveMsg").textContent = "";

    const modal = document.getElementById("teacherProfileModal");
    if (modal) modal.classList.remove("hidden");
}

function closeTeacherProfileModal() {
    const modal = document.getElementById("teacherProfileModal");
    if (modal) modal.classList.add("hidden");
}

async function saveTeacherProfile() {
    if (!currentTeacher) return;

    const name = document.getElementById("profNameInput").value.trim();
    const dept = document.getElementById("profDeptInput").value.trim();
    const phone = document.getElementById("profPhoneInput").value.trim();
    const subjectsRaw = document.getElementById("profSubjectsInput").value.trim();
    const msg = document.getElementById("profSaveMsg");

    if (!name) {
        msg.style.color = "#ef4444";
        msg.textContent = "Full Name cannot be empty.";
        return;
    }

    const subjects = subjectsRaw.split(",").map(s => s.trim()).filter(Boolean);

    currentTeacher.name = name;
    currentTeacher.department = dept;
    currentTeacher.phone = phone;
    currentTeacher.subjects = subjects;

    try {
        if (typeof db !== "undefined" && currentTeacher.uid) {
            await db.collection("teachers").doc(currentTeacher.uid).update({
                name: name,
                department: dept,
                phone: phone,
                subjects: subjects
            });
        }
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));
        initTeacherPortalUI();
        msg.style.color = "#16a34a";
        msg.textContent = "Profile updated successfully!";
        setTimeout(() => closeTeacherProfileModal(), 1200);
        showToast("✅ Profile Updated!");
    } catch (err) {
        console.error("Profile save error:", err);
        msg.style.color = "#ef4444";
        msg.textContent = "Could not save profile: " + err.message;
    }
}

/* =====================================================
   TEACHER DASHBOARD & STATS
===================================================== */

async function updateTeacherDashboardStats() {
    let history = getStoredCompetitionHistory();

    const count = history.length;
    const totalStudents = history.reduce((sum, c) => sum + (c.participantCount || 0), 0);
    const avgScore = count > 0
        ? Math.round(history.reduce((sum, c) => sum + (c.averageScore || 75), 0) / count)
        : 0;

    const tTotalElem = document.getElementById("teacherTotalCompetitions");
    if (tTotalElem) tTotalElem.textContent = count;

    const tCompElem = document.getElementById("tStatCompetitions");
    if (tCompElem) tCompElem.textContent = count;

    const tStudElem = document.getElementById("tStatStudents");
    if (tStudElem) tStudElem.textContent = totalStudents;

    const tAccElem = document.getElementById("tStatAvgAccuracy");
    if (tAccElem) tAccElem.textContent = `${avgScore}%`;

    // Active competition banner
    const banner = document.getElementById("activeCompetitionBanner");
    const bannerText = document.getElementById("activeCompetitionBannerText");
    if (activeHostCompetition && activeHostCompetition.status !== "cancelled") {
        if (banner) banner.classList.remove("hidden");
        if (bannerText) bannerText.textContent = `Room: ${activeHostCompetition.code} | Subject: ${activeHostCompetition.subject} | Phase: ${(activeHostCompetition.phase || "waiting").toUpperCase()}`;
    } else {
        if (banner) banner.classList.add("hidden");
    }
}

function resumeActiveCompetition() {
    const comp = activeHostCompetition;
    if (!comp) return;

    const phase = comp.phase || "waiting";
    if (phase === "waiting") {
        setupTeacherWaitingRoomUI(comp);
        updateHostParticipantsUI();
        showTeacherPage("teacherWaitingRoom");
    } else if (phase === "question") {
        showTeacherPage("teacherLiveQuiz");
        renderHostQuestionView();
        startHostQuestionTimer();
    } else if (phase === "feedback") {
        const qIdx = comp.currentQuestionIndex || 0;
        const summary = summarizeHostAnswers(qIdx);
        const total = comp.participantCount || 0;
        renderHostResultScreen(normalizeLiveQuestion(comp.questions[qIdx]), summary, total, summary.total, Math.max(0, total - summary.total));
        renderHostAnswersTable("tResultAnswersTable", qIdx);
        showTeacherPage("teacherResult");
    } else if (phase === "leaderboard") {
        showLiveLeaderboard();
    } else if (phase === "finished") {
        renderHostPodium();
        showTeacherPage("teacherPodium");
    }
}

function quickCreateCompetition(subject) {
    showTeacherPage("teacherCreate");
    const select = document.getElementById("compSubjectSelect");
    if (select) {
        select.value = subject;
        onSubjectConfigChange();
    }
}

/* =====================================================
   COMPETITION CREATOR & QUESTION REVIEW
===================================================== */

let generatedCompetitionQuestions = [];

function onSubjectConfigChange() {
    const subject = document.getElementById("compSubjectSelect").value;
    const count = parseInt(document.getElementById("compQuestionCountSelect").value, 10) || 5;

    // Build question pool
    let pool = quizData[subject] ? [...quizData[subject]] : [];
    if (pool.length === 0 && fallbackQuizData[subject]) {
        pool = [...fallbackQuizData[subject]];
    }

    // If needed, generate extra high-quality questions for larger sets (15-20)
    if (pool.length < count) {
        pool = expandQuestionPool(subject, pool, count);
    }

    // Shuffle and pick `count` questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    generatedCompetitionQuestions = shuffled.slice(0, count);

    renderQuestionReviewList();
}

function generateRandomQuestionSet() {
    onSubjectConfigChange();
    showToast("🎲 Generated a fresh set of questions!");
}

function expandQuestionPool(subject, existingPool, targetCount) {
    const pool = [...existingPool];
    let i = 1;
    while (pool.length < targetCount) {
        pool.push({
            question: `${subject} Advanced Challenge #${i}: Which of the following is considered a best practice in ${subject}?`,
            options: [
                `Optimizing memory and resource allocation in ${subject}`,
                `Ignoring exceptions and errors silently`,
                `Hardcoding configuration parameters into source files`,
                `Bypassing data validation rules`
            ],
            answer: 0
        });
        i++;
    }
    return pool;
}

function renderQuestionReviewList() {
    const listContainer = document.getElementById("questionReviewList");
    const badge = document.getElementById("reviewCountBadge");
    if (!listContainer) return;

    if (badge) badge.textContent = generatedCompetitionQuestions.length;

    listContainer.innerHTML = "";

    generatedCompetitionQuestions.forEach((q, idx) => {
        const item = document.createElement("div");
        item.className = "review-q-item";

        let optionsHtml = "";
        q.options.forEach((opt, optIdx) => {
            const isCorrect = optIdx === q.answer;
            optionsHtml += `
                <div class="review-opt ${isCorrect ? 'is-correct' : ''}">
                    <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt} ${isCorrect ? ' ✓ (Correct)' : ''}
                </div>
            `;
        });

        item.innerHTML = `
            <div class="review-q-header">
                <span class="q-badge-mini">Q${idx + 1}</span>
                <div class="review-q-title">${q.question}</div>
            </div>
            <div class="review-options-grid">
                ${optionsHtml}
            </div>
        `;

        listContainer.appendChild(item);
    });
}

/* =====================================================
   LAUNCH COMPETITION & GENERATE CODE + QR
===================================================== */

function generateCompetitionCode() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `SKQ-${randomNum}`;
}

/**
 * Safely normalize any question format into Kahoot-style:
 * { question: string, options: [string, string, string, string], answer: number (0..3) }
 */
function normalizeLiveQuestion(q) {
    if (!q) return null;

    const questionText = (q.question || q.title || q.text || q.prompt || "Question").toString().trim();

    let rawOptions = [];
    if (Array.isArray(q.options)) {
        rawOptions = q.options;
    } else if (q.options && typeof q.options === "object") {
        rawOptions = [q.options.a || q.options[0], q.options.b || q.options[1], q.options.c || q.options[2], q.options.d || q.options[3]];
    } else if (q.answers && typeof q.answers === "object") {
        rawOptions = [q.answers.answer_a, q.answers.answer_b, q.answers.answer_c, q.answers.answer_d];
    }

    const options = [];
    for (let i = 0; i < 4; i++) {
        const val = rawOptions[i];
        if (typeof val === "object" && val !== null) {
            options.push((val.text || val.option || `Option ${String.fromCharCode(65 + i)}`).toString().trim());
        } else if (val !== undefined && val !== null && String(val).trim() !== "") {
            options.push(String(val).trim());
        } else {
            options.push(`Option ${String.fromCharCode(65 + i)}`);
        }
    }

    let answerIndex = 0;
    if (typeof q.answer === "number" && q.answer >= 0 && q.answer <= 3) {
        answerIndex = q.answer;
    } else if (typeof q.answer === "string") {
        const trimmed = q.answer.trim();
        if (/^[0-3]$/.test(trimmed)) {
            answerIndex = parseInt(trimmed, 10);
        } else if (/^[A-Da-d]$/.test(trimmed)) {
            answerIndex = trimmed.toUpperCase().charCodeAt(0) - 65;
        } else {
            const foundIdx = options.findIndex(opt => opt.toLowerCase() === trimmed.toLowerCase());
            if (foundIdx !== -1) answerIndex = foundIdx;
        }
    } else if (typeof q.correctAnswer === "number" || typeof q.correct_answer === "number") {
        answerIndex = parseInt(q.correctAnswer || q.correct_answer, 10) || 0;
    } else if (typeof q.correctAnswer === "string" || typeof q.correct_answer === "string") {
        const ca = (q.correctAnswer || q.correct_answer).trim();
        if (/^[0-3]$/.test(ca)) {
            answerIndex = parseInt(ca, 10);
        } else if (/^[A-Da-d]$/.test(ca)) {
            answerIndex = ca.toUpperCase().charCodeAt(0) - 65;
        } else {
            const foundIdx = options.findIndex(opt => opt.toLowerCase() === ca.toLowerCase());
            if (foundIdx !== -1) answerIndex = foundIdx;
        }
    }

    if (answerIndex < 0 || answerIndex > 3 || isNaN(answerIndex)) {
        answerIndex = 0;
    }

    return {
        question: questionText,
        options: options,
        answer: answerIndex
    };
}

/**
 * Sanitize questions array for Firestore:
 * - removes undefined/null values from options
 * - ensures answer index is a number
 * - returns a plain serializable array
 */
function sanitizeQuestionsForFirestore(questions) {
    return (questions || []).map(normalizeLiveQuestion).filter(Boolean);
}

/* =====================================================
   LIVE COMPETITION — SHARED FIRESTORE HELPERS
   liveCompetitions/{CODE} is the single source of truth.
   - liveCompetitions/{CODE}                       public state (no answer key)
   - liveCompetitions/{CODE}/hostData/answerKey    correct answers (host only)
   - liveCompetitions/{CODE}/participants/{uid}    one doc per student device
   - liveCompetitions/{CODE}/answers/{uid}_{qIdx}  one doc per student per question
===================================================== */

const LIVE_COLLECTION = "liveCompetitions";
const LIVE_CODE_PATTERN = /^SKQ-\d{6}$/;

function liveCompetitionRef(code) {
    return db.collection(LIVE_COLLECTION).doc(code);
}

function getFirebaseProjectId() {
    try {
        return firebase.app().options.projectId || "unknown";
    } catch (e) {
        return "unavailable";
    }
}

function liveError(kind, message) {
    const err = new Error(message);
    err.liveKind = kind;
    return err;
}

function assertFirebaseReady() {
    if (typeof firebase === "undefined" || typeof db === "undefined" || !db || typeof auth === "undefined" || !auth) {
        throw liveError("CONFIG", "FIREBASE CONFIGURATION ERROR: Firebase did not initialize on this device (firebase-init.js is missing or failed to load). Please tell your teacher.");
    }
}

// Converts Firebase/Auth errors into the distinct messages shown to users.
function describeLiveError(err, action) {
    if (err && err.liveKind) return err;
    const code = (err && err.code) || "";
    console.error(`[QUIZ DEBUG] ${action} failed:`, code || (err && err.message) || err);

    if (code === "permission-denied") {
        return liveError("PERMISSION", `PERMISSION DENIED: ${action} was blocked by the Firestore security rules.`);
    }
    if (code === "unavailable" || code === "deadline-exceeded" || code === "auth/network-request-failed" ||
        (typeof navigator !== "undefined" && navigator.onLine === false)) {
        return liveError("NETWORK", "NETWORK ERROR: Cannot reach the quiz server. Check your internet connection and try again.");
    }
    if (code === "auth/operation-not-allowed" || code === "auth/admin-restricted-operation") {
        return liveError("CONFIG", "FIREBASE CONFIGURATION ERROR: Anonymous sign-in is disabled for this Firebase project. The teacher must enable it in Firebase Console → Authentication → Sign-in method → Anonymous.");
    }
    if (/^auth\/(invalid-api-key|api-key-not-valid|app-not-authorized|unauthorized-domain)/.test(code)) {
        return liveError("CONFIG", `FIREBASE CONFIGURATION ERROR: This site is not authorized for Firebase project "${getFirebaseProjectId()}" (${code}).`);
    }
    return liveError("UNKNOWN", `${action} failed: ${(err && err.message) || err}`);
}

function timestampToMillis(ts) {
    if (!ts) return null;
    if (typeof ts.toMillis === "function") return ts.toMillis();
    if (typeof ts === "number") return ts;
    const parsed = Date.parse(ts);
    return isNaN(parsed) ? null : parsed;
}

// Seconds left on the current question, derived from the shared start timestamp.
function getLiveQuestionRemainingSeconds(comp, clockOffsetMs = 0) {
    const duration = comp.questionDuration || 60;
    const startedMs = timestampToMillis(comp.questionStartedAt) || comp.questionStartTime || null;
    if (!startedMs) return duration;
    const elapsedSec = (Date.now() + clockOffsetMs - startedMs) / 1000;
    return Math.max(0, Math.min(duration, Math.ceil(duration - elapsedSec)));
}

function getLivePhase(comp) {
    if (!comp) return "waiting";
    if (comp.status === "cancelled") return "cancelled";
    if (comp.status === "completed" || comp.phase === "finished" || comp.phase === "completed") return "finished";
    return comp.phase || "waiting";
}

// Speed-weighted points: 1000 for a correct answer plus up to 500 for answering fast.
function calculateLivePoints(isCorrect, answeredAtMs, questionStartedMs, durationSec) {
    if (!isCorrect) return 0;
    if (!answeredAtMs || !questionStartedMs) return 1000;
    const remainingSec = Math.max(0, durationSec - (answeredAtMs - questionStartedMs) / 1000);
    return 1000 + Math.round(500 * Math.min(1, remainingSec / durationSec));
}

/* =====================================================
   CREATE LIVE COMPETITION (auto-generated AND teacher-created)
===================================================== */

async function generateUniqueCompetitionCode() {
    for (let attempt = 0; attempt < 5; attempt++) {
        const candidate = generateCompetitionCode();
        const snap = await liveCompetitionRef(candidate).get();
        if (!snap.exists) return candidate;
    }
    throw new Error("Could not allocate a unique competition code. Please try again.");
}

// The rules authorize hosts through teachers/{auth.uid} with role "teacher" — the same profile
// the teacher login creates. Verify that before writing, so failures explain themselves.
async function ensureLiveHostAuthorized() {
    const user = auth.currentUser;
    const relogin = "Please log out of the teacher portal and sign in again with your staff account.";

    console.log("[QUIZ DEBUG] Current Firebase UID:", user ? user.uid : "(not signed in)");
    console.log("[QUIZ DEBUG] Current user email:", user ? (user.email || (user.isAnonymous ? "(anonymous)" : "(none)")) : "(not signed in)");

    if (!user || user.isAnonymous) {
        throw liveError("AUTH", `You are not signed in to Firebase as a teacher. ${relogin}`);
    }
    if (!currentTeacher || currentTeacher.uid !== user.uid) {
        throw liveError("AUTH", `This browser is signed in to Firebase as ${user.email || user.uid}, not as the teacher shown in the portal (${currentTeacher ? currentTeacher.email || currentTeacher.name : "none"}). This happens when another account logs in from another tab. ${relogin}`);
    }

    const teacherRef = db.collection("teachers").doc(user.uid);
    let teacherSnap = await teacherRef.get();
    if (!teacherSnap.exists) {
        // Login normally creates this profile; recreate it for the same signed-in teacher if it is missing.
        console.warn("[QUIZ DEBUG] teachers/" + user.uid + " missing — recreating the teacher profile.");
        await teacherRef.set({
            uid: user.uid,
            name: currentTeacher.name || user.displayName || (user.email || "").split("@")[0],
            email: user.email || currentTeacher.email || "",
            teacherId: currentTeacher.teacherId || `TCH${Math.floor(100 + Math.random() * 900)}`,
            department: currentTeacher.department || "Information Technology",
            role: "teacher",
            status: "active",
            subjects: currentTeacher.subjects || [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        teacherSnap = await teacherRef.get();
    }

    const profile = teacherSnap.data() || {};
    console.log("[QUIZ DEBUG] Staff/teacher role:", profile.role, "| status:", profile.status);
    if (profile.role !== "teacher" || profile.status !== "active") {
        throw liveError("AUTH", `Account ${user.email || user.uid} is not an active teacher (role: ${profile.role || "none"}), so Firestore will not allow it to host. ${relogin}`);
    }
    return user;
}

async function createLiveCompetition({ title, subject, competitionType, questions, questionDuration, isStaffCreated }) {
    assertFirebaseReady();

    const hostUser = await ensureLiveHostAuthorized();

    // Snapshot the exact question set now — every device plays these, in this order.
    const fullQuestions = sanitizeQuestionsForFirestore(questions);
    if (fullQuestions.length === 0) {
        throw new Error("Please select questions before launching the competition.");
    }

    const code = await generateUniqueCompetitionCode();
    const creatorName = currentTeacher ? (currentTeacher.name || currentTeacher.email || currentTeacher.teacherId || "Prof. Educator") : "Staff";

    // Students only ever see question text and options; correctness lives in hostData/answerKey.
    const publicQuestions = fullQuestions.map((q, idx) => ({ id: `q${idx + 1}`, question: q.question, options: q.options }));

    const competitionData = {
        competitionCode: code,
        code: code,
        title: title,
        subject: subject,
        competitionType: competitionType,
        createdBy: creatorName,
        teacherId: currentTeacher ? (currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01") : "TEACHER-01",
        teacherName: currentTeacher ? (currentTeacher.name || creatorName) : creatorName,
        hostUid: hostUser.uid,
        status: "active",
        phase: "waiting",
        questions: publicQuestions,
        totalQuestions: publicQuestions.length,
        currentQuestionIndex: 0,
        questionStartTime: null,
        questionStartedAt: null,
        questionEndedAt: null,
        questionStartTimes: {},
        questionDuration: questionDuration || 60,
        participantCount: 0,
        answersSummary: {},
        revealedAnswers: {},
        isStaffCreated: !!isStaffCreated,
        resultsArchived: false,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    const ref = liveCompetitionRef(code);
    console.log("[QUIZ DEBUG] Firebase project:", getFirebaseProjectId());
    console.log("[QUIZ DEBUG] Current UID:", auth.currentUser ? auth.currentUser.uid : null);
    console.log("[QUIZ DEBUG] Current email:", auth.currentUser ? auth.currentUser.email : null);
    console.log("[QUIZ DEBUG] Competition code:", code);
    console.log("[QUIZ DEBUG] Firestore path:", `liveCompetitions/${code}`);
    console.log("[QUIZ DEBUG] Creating live competition:", { project: getFirebaseProjectId(), collection: LIVE_COLLECTION, type: competitionType, hostUid: hostUser.uid });

    await ref.set({ ...competitionData, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    await ref.collection("hostData").doc("answerKey").set({ questions: fullQuestions });

    const verifySnap = await ref.get();
    if (!verifySnap.exists) {
        throw new Error(`Document verification failed: ${LIVE_COLLECTION}/${code} was not found after the write.`);
    }
    console.log("[QUIZ DEBUG] Competition saved:", `${LIVE_COLLECTION}/${code}`);

    // Host memory keeps the full questions (with answers) for authoritative grading.
    return { ...competitionData, questions: fullQuestions, createdAt: new Date().toISOString() };
}

async function hostNewLiveCompetition(options) {
    showLoading("Creating & Saving Competition Room...");

    let competition;
    try {
        competition = await createLiveCompetition(options);
    } catch (err) {
        console.error("[QUIZ FIREBASE ERROR]", {
            code: err?.code,
            message: err?.message,
            name: err?.name,
            liveKind: err?.liveKind,
            stack: err?.stack
        });
        hideLoading();
        // Firebase errors get classified; our own validation errors are already user-readable.
        const friendly = (err.liveKind || err.code) ? describeLiveError(err, "Creating the competition") : err;
        alert(`⚠️ ${friendly.message}`);
        return;
    }

    activeHostCompetition = competition;
    activeHostCompetition.participants = {};
    activeHostCompetition.answersByQuestion = {};
    persistHostCompetition();

    hideLoading();

    // Render Waiting Room UI & QR Code ONLY after successful database write
    setupTeacherWaitingRoomUI(competition);
    showTeacherPage("teacherWaitingRoom");
    showToast(`🎉 Room Created & Saved! Join Code: ${competition.code}`);

    attachHostCompetitionListeners(competition.code);
}

function persistHostCompetition() {
    if (!activeHostCompetition) return;
    // Participants and answers are rebuilt from Firestore listeners; only persist the host's own state.
    const { participants, answersByQuestion, ...persisted } = activeHostCompetition;
    try { localStorage.setItem("skillquest_active_competition", JSON.stringify(persisted)); } catch (e) { }
}

async function launchCompetitionLobby() {
    if (generatedCompetitionQuestions.length === 0) {
        onSubjectConfigChange();
    }

    const subject = document.getElementById("compSubjectSelect").value;
    await hostNewLiveCompetition({
        title: `${subject} Live Battle`,
        subject: subject,
        competitionType: "auto",
        questions: generatedCompetitionQuestions,
        questionDuration: 60,
        isStaffCreated: false
    });
}

function setupTeacherWaitingRoomUI(comp) {
    document.getElementById("tLobbyCode").textContent = comp.code;
    document.getElementById("tLobbySubjectBadge").textContent = `📚 ${comp.subject}`;
    document.getElementById("tLobbyQuestionsBadge").textContent = `📝 ${comp.totalQuestions} Questions`;
    document.getElementById("tLobbyStudentCount").textContent = "0";
    document.getElementById("tLobbyProgressBar").style.width = "0%";

    // Render QR Code
    renderHostQrCode(comp.code);
    const joinUrlElem = document.getElementById("tLobbyJoinUrl");
    if (joinUrlElem) joinUrlElem.textContent = getLiveCompetitionJoinUrl(comp.code);

    // Reset students list
    const list = document.getElementById("tLobbyStudentsList");
    if (list) {
        list.innerHTML = `
            <div class="waiting-placeholder">
                <div class="radar-pulse"></div>
                <p>Waiting for students to enter code & join...</p>
            </div>
        `;
    }
}

function getLiveCompetitionJoinUrl(code) {
    const defaultPagesBase = "https://iniya75.github.io/QuizManagement/";
    let baseUrl = defaultPagesBase;

    try {
        if (typeof window !== "undefined" && window.location) {
            const host = window.location.hostname;
            if (host === "iniya75.github.io") {
                let pathname = window.location.pathname;
                if (!pathname.endsWith("/")) {
                    const lastSlash = pathname.lastIndexOf("/");
                    pathname = lastSlash >= 0 ? pathname.substring(0, lastSlash + 1) : "/";
                }
                baseUrl = `${window.location.origin}${pathname}`;
            } else if (host === "localhost" || host === "127.0.0.1" || window.location.protocol === "file:") {
                // When running locally, use public GitHub Pages URL so scanning on phones works!
                baseUrl = defaultPagesBase;
            } else {
                let pathname = window.location.pathname;
                if (!pathname.endsWith("/")) {
                    const lastSlash = pathname.lastIndexOf("/");
                    pathname = lastSlash >= 0 ? pathname.substring(0, lastSlash + 1) : "/";
                }
                baseUrl = `${window.location.origin}${pathname}`;
            }
        }
    } catch (e) {
        baseUrl = defaultPagesBase;
    }

    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }

    const fullJoinUrl = `${baseUrl}?join=${encodeURIComponent(code)}`;
    console.log("[SKQ Host] Generated public QR join URL:", fullJoinUrl);
    return fullJoinUrl;
}

function renderHostQrCode(code) {
    const qrContainer = document.getElementById("teacherQrCode");
    if (!qrContainer) return;
    qrContainer.innerHTML = "";

    const joinUrl = getLiveCompetitionJoinUrl(code);

    try {
        if (typeof QRCode !== "undefined") {
            new QRCode(qrContainer, {
                text: joinUrl,
                width: 170,
                height: 170,
                colorDark: "#1e1b4b",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
        } else {
            // Fallback SVG QR generator or QR Server API
            qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(joinUrl)}" alt="QR Code" style="width:170px;height:170px;border-radius:12px;" />`;
        }
    } catch (qrErr) {
        console.warn("QR generation fallback:", qrErr);
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(joinUrl)}" alt="QR Code" style="width:170px;height:170px;border-radius:12px;" />`;
    }
}

function copyCompetitionCode() {
    if (!activeHostCompetition) return;
    navigator.clipboard.writeText(activeHostCompetition.code)
        .then(() => showToast(`📋 Copied code: ${activeHostCompetition.code}`))
        .catch(() => alert(`Competition Code: ${activeHostCompetition.code}`));
}

function copyCompetitionLink() {
    if (!activeHostCompetition) return;
    const joinUrl = getLiveCompetitionJoinUrl(activeHostCompetition.code);
    navigator.clipboard.writeText(joinUrl)
        .then(() => showToast("🔗 Copied direct join link to clipboard!"))
        .catch(() => alert(joinUrl));
}

async function cancelCompetition() {
    if (!confirm("Are you sure you want to cancel this live competition?")) return;

    if (activeHostCompetition) {
        try {
            await liveCompetitionRef(activeHostCompetition.code).update({
                status: "cancelled",
                phase: "finished"
            });
        } catch (err) {
            alert(`⚠️ ${describeLiveError(err, "Cancelling the competition").message}`);
            return;
        }
        cleanupActiveHostListeners();
        activeHostCompetition = null;
        localStorage.removeItem("skillquest_active_competition");
    }

    showTeacherPage("teacherDashboard");
    showToast("Competition cancelled.");
}

/* =====================================================
   REAL-TIME SYNCHRONIZATION ENGINE (HOST)
   The host listens to the participants and answers subcollections,
   grades every answer against the answer key, and is the only
   client that changes the shared competition state.
===================================================== */

const liveGradingInFlight = new Map();
let hostAutoEndScheduledFor = null;

function attachHostCompetitionListeners(code) {
    cleanupActiveHostListeners();
    if (typeof db === "undefined" || !db) return;

    const ref = liveCompetitionRef(code);

    // Shared competition doc: keeps server question start times for scoring and timer restore.
    teacherUnsubCompetition = ref.onSnapshot(snap => {
        if (!activeHostCompetition || activeHostCompetition.code !== code || !snap.exists) return;
        const data = snap.data({ serverTimestamps: "estimate" });
        activeHostCompetition.questionStartTimes = data.questionStartTimes || {};
        activeHostCompetition.questionStartedAt = data.questionStartedAt || null;
    }, err => console.warn("[QUIZ DEBUG] Host competition listener error:", err.code || err.message));

    teacherUnsubParticipants = ref.collection("participants").onSnapshot(snapshot => {
        if (!activeHostCompetition || activeHostCompetition.code !== code) return;

        const participantsMap = {};
        snapshot.forEach(doc => {
            participantsMap[doc.id] = { id: doc.id, participantId: doc.id, ...doc.data({ serverTimestamps: "estimate" }) };
        });

        const previousCount = activeHostCompetition.participantCount;
        activeHostCompetition.participants = participantsMap;
        activeHostCompetition.participantCount = snapshot.size;
        console.log("[QUIZ DEBUG] Host participants:", snapshot.size);

        if (previousCount !== snapshot.size) {
            ref.update({ participantCount: snapshot.size }).catch(e => console.warn("[QUIZ DEBUG] participantCount update notice:", e.code || e.message));
        }

        updateHostParticipantsUI();
        refreshHostLiveViews();
    }, err => console.warn("[QUIZ DEBUG] Host participants listener error:", err.code || err.message));

    teacherUnsubAnswers = ref.collection("answers").onSnapshot(snapshot => {
        if (!activeHostCompetition || activeHostCompetition.code !== code) return;

        const byQuestion = {};
        snapshot.forEach(doc => {
            const ans = doc.data({ serverTimestamps: "estimate" });
            if (!byQuestion[ans.questionIndex]) byQuestion[ans.questionIndex] = {};
            byQuestion[ans.questionIndex][ans.participantId] = { id: doc.id, ...ans };
        });
        activeHostCompetition.answersByQuestion = byQuestion;

        snapshot.docChanges().forEach(change => {
            if (change.type !== "removed") gradeLiveAnswer(code, change.doc);
        });

        refreshHostLiveViews();
    }, err => console.warn("[QUIZ DEBUG] Host answers listener error:", err.code || err.message));
}

function cleanupActiveHostListeners() {
    if (teacherUnsubCompetition) {
        try { teacherUnsubCompetition(); } catch (e) { }
        teacherUnsubCompetition = null;
    }
    if (teacherUnsubParticipants) {
        try { teacherUnsubParticipants(); } catch (e) { }
        teacherUnsubParticipants = null;
    }
    if (teacherUnsubAnswers) {
        try { teacherUnsubAnswers(); } catch (e) { }
        teacherUnsubAnswers = null;
    }
    clearInterval(liveTimerInterval);
}

// Students submit only the option they picked; correctness and points are decided here
// from the host's answer key and written back in one transaction (idempotent via `graded`).
function gradeLiveAnswer(code, answerDoc) {
    const answer = answerDoc.data({ serverTimestamps: "estimate" });
    if (answer.graded || liveGradingInFlight.has(answerDoc.id)) return;

    const comp = activeHostCompetition;
    const question = comp && comp.questions ? normalizeLiveQuestion(comp.questions[answer.questionIndex]) : null;
    if (!question) return;

    const isCorrect = answer.selectedOption === question.answer;
    const startTimes = comp.questionStartTimes || {};
    const questionStartedMs = timestampToMillis(startTimes[answer.questionIndex]) ||
        (answer.questionIndex === comp.currentQuestionIndex ? timestampToMillis(comp.questionStartedAt) : null);
    const pointsEarned = calculateLivePoints(isCorrect, timestampToMillis(answer.answeredAt), questionStartedMs, comp.questionDuration || 60);

    const ref = liveCompetitionRef(code);
    const answerRef = ref.collection("answers").doc(answerDoc.id);
    const participantRef = ref.collection("participants").doc(answer.participantId);
    const increment = firebase.firestore.FieldValue.increment;

    const task = db.runTransaction(async tx => {
        const fresh = await tx.get(answerRef);
        if (!fresh.exists || fresh.data().graded) return;
        tx.update(answerRef, {
            graded: true,
            isCorrect: isCorrect,
            correctOption: question.answer,
            pointsEarned: pointsEarned,
            gradedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        tx.update(participantRef, {
            score: increment(pointsEarned),
            correctAnswers: increment(isCorrect ? 1 : 0),
            wrongAnswers: increment(isCorrect ? 0 : 1),
            answeredCount: increment(1)
        });
    }).then(() => {
        console.log("[QUIZ DEBUG] Graded answer:", { participantId: answer.participantId, questionIndex: answer.questionIndex, selectedOption: answer.selectedOption, isCorrect, pointsEarned });
    }).catch(err => {
        console.error("[QUIZ DEBUG] Grading failed for", answerDoc.id, err.code || err.message);
    }).finally(() => {
        liveGradingInFlight.delete(answerDoc.id);
    });

    liveGradingInFlight.set(answerDoc.id, task);
}

async function waitForLiveGrading() {
    await Promise.allSettled(Array.from(liveGradingInFlight.values()));
}

function getHostAnswersForQuestion(qIdx) {
    return (activeHostCompetition && activeHostCompetition.answersByQuestion && activeHostCompetition.answersByQuestion[qIdx]) || {};
}

function summarizeHostAnswers(qIdx) {
    const summary = { 0: 0, 1: 0, 2: 0, 3: 0, total: 0 };
    Object.values(getHostAnswersForQuestion(qIdx)).forEach(ans => {
        if (ans.selectedOption >= 0 && ans.selectedOption <= 3) {
            summary[ans.selectedOption]++;
            summary.total++;
        }
    });
    return summary;
}

// Re-render whatever host screen is visible after any participants/answers change.
function refreshHostLiveViews() {
    const comp = activeHostCompetition;
    if (!comp) return;
    const qIdx = comp.currentQuestionIndex || 0;

    if (comp.phase === "question") {
        refreshHostAnswerProgress();
        renderHostAnswersTable("tLiveAnswersTable", qIdx);
    } else if (comp.phase === "feedback") {
        renderHostAnswersTable("tResultAnswersTable", qIdx);
    } else if (comp.phase === "leaderboard") {
        renderLeaderboardTable("tLeaderboardTableContainer", calculateSortedLeaderboard(comp.participants), null);
    } else if (comp.phase === "finished") {
        renderHostPodium();
    }
}

function refreshHostAnswerProgress() {
    const comp = activeHostCompetition;
    const qIdx = comp.currentQuestionIndex || 0;
    const submitted = Object.keys(getHostAnswersForQuestion(qIdx)).length;
    const total = comp.participantCount || 0;
    const pct = total > 0 ? Math.min(Math.round((submitted / total) * 100), 100) : 0;

    const countElem = document.getElementById("tAnswersSubmittedCount");
    if (countElem) countElem.textContent = submitted;
    const totalElem = document.getElementById("tTotalParticipantsCount");
    if (totalElem) totalElem.textContent = total;
    const pctElem = document.getElementById("tAnswerPercentage");
    if (pctElem) pctElem.textContent = `${pct}%`;
    const barElem = document.getElementById("tSubmissionProgressBar");
    if (barElem) barElem.style.width = `${pct}%`;

    // Everyone answered: reveal the result early, once per question.
    if (total > 0 && submitted >= total && hostAutoEndScheduledFor !== qIdx) {
        hostAutoEndScheduledFor = qIdx;
        setTimeout(() => {
            if (activeHostCompetition && activeHostCompetition.phase === "question" && activeHostCompetition.currentQuestionIndex === qIdx) {
                forceEndQuestionTimer();
            }
        }, 800);
    }
}

function renderHostAnswersTable(containerId, qIdx) {
    const container = document.getElementById(containerId);
    const comp = activeHostCompetition;
    if (!container || !comp) return;

    const question = normalizeLiveQuestion(comp.questions[qIdx]);
    if (!question) return;

    const letters = ["A", "B", "C", "D"];
    const answers = getHostAnswersForQuestion(qIdx);
    const players = Object.values(comp.participants || {})
        .sort((a, b) => (timestampToMillis(a.joinedAt) || 0) - (timestampToMillis(b.joinedAt) || 0));

    let rows = "";
    players.forEach(p => {
        const ans = answers[p.id];
        let answerCell = `<span style="color: var(--muted);">—</span>`;
        let resultCell = `<span style="color: var(--muted);">Waiting…</span>`;
        let pointsCell = "–";
        if (ans) {
            answerCell = `<strong>${letters[ans.selectedOption] || "?"}</strong>`;
            if (ans.graded) {
                resultCell = ans.isCorrect
                    ? `<span style="color: #10b981; font-weight: 700;">✓ Correct</span>`
                    : `<span style="color: #ef4444; font-weight: 700;">✗ Wrong</span>`;
                pointsCell = (ans.pointsEarned || 0).toLocaleString();
            } else {
                resultCell = `<span style="color: var(--muted);">Grading…</span>`;
            }
        }
        rows += `
            <tr class="live-rank-row">
                <td><strong>${escapeHtml(p.studentName || p.name || "Student")}</strong></td>
                <td style="text-align: center;">${answerCell}</td>
                <td>${resultCell}</td>
                <td style="text-align: right;">${pointsCell}</td>
                <td style="text-align: right; font-weight: 800;">${(p.score || 0).toLocaleString()}</td>
            </tr>
        `;
    });

    if (!rows) {
        rows = `<tr><td colspan="5" style="text-align: center; color: var(--muted); padding: 16px;">No students have joined.</td></tr>`;
    }

    container.innerHTML = `
        <p style="margin: 0 0 10px 0; font-weight: 700;">
            Question ${qIdx + 1} — Correct answer: <span style="color: #10b981;">${letters[question.answer]}. ${escapeHtml(question.options[question.answer] || "")}</span>
        </p>
        <table class="live-rank-table">
            <thead>
                <tr>
                    <th>Student</th>
                    <th style="text-align: center;">Answer</th>
                    <th>Result</th>
                    <th style="text-align: right;">Points</th>
                    <th style="text-align: right;">Total Score</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function updateHostParticipantsUI() {
    if (!activeHostCompetition) return;

    const count = activeHostCompetition.participantCount || 0;
    const countElem = document.getElementById("tLobbyStudentCount");
    if (countElem) countElem.textContent = count;

    const progressFill = document.getElementById("tLobbyProgressBar");
    if (progressFill) {
        const pct = Math.min((count / 100) * 100, 100);
        progressFill.style.width = `${pct}%`;
    }

    const list = document.getElementById("tLobbyStudentsList");
    if (!list) return;

    if (count === 0) {
        list.innerHTML = `
            <div class="waiting-placeholder">
                <div class="radar-pulse"></div>
                <p>Waiting for students to enter code & join...</p>
            </div>
        `;
        return;
    }

    list.innerHTML = "";
    Object.values(activeHostCompetition.participants)
        .sort((a, b) => (timestampToMillis(a.joinedAt) || 0) - (timestampToMillis(b.joinedAt) || 0))
        .forEach(p => {
            const displayName = p.studentName || p.name || "Student";
            const chip = document.createElement("div");
            chip.className = "student-chip";
            chip.innerHTML = `
                <span class="chip-avatar">${escapeHtml(displayName.charAt(0).toUpperCase())}</span>
                <span>${escapeHtml(displayName)}</span>
            `;
            list.appendChild(chip);
        });
}

/* =====================================================
   HOST LIVE QUIZ FLOW & SYNCHRONIZED TIMER
===================================================== */

async function startLiveQuiz() {
    if (!activeHostCompetition) return;
    if ((activeHostCompetition.participantCount || 0) === 0 &&
        !confirm("No students have joined yet. Start the quiz anyway?")) {
        return;
    }
    await goToLiveQuestion(0);
}

// Moves every device to question `index` by updating the shared competition doc.
async function goToLiveQuestion(index) {
    const comp = activeHostCompetition;
    if (!comp) return;

    const serverNow = firebase.firestore.FieldValue.serverTimestamp();
    const update = {
        status: "active",
        phase: "question",
        currentQuestionIndex: index,
        questionStartTime: Date.now(),
        questionStartedAt: serverNow,
        questionEndedAt: null,
        questionDuration: comp.questionDuration || 60,
        [`questionStartTimes.${index}`]: serverNow
    };
    if (index === 0) update.startedAt = serverNow;

    showLoading(index === 0 ? "Starting quiz on all devices..." : "Sending next question...");
    try {
        await liveCompetitionRef(comp.code).update(update);
    } catch (err) {
        hideLoading();
        alert(`⚠️ ${describeLiveError(err, "Updating the live question").message}`);
        return;
    }
    hideLoading();

    console.log("[QUIZ DEBUG] Host moved all devices to question", index + 1, "of", comp.totalQuestions);

    comp.status = "active";
    comp.phase = "question";
    comp.currentQuestionIndex = index;
    comp.questionStartTime = update.questionStartTime;
    hostAutoEndScheduledFor = null;
    persistHostCompetition();

    showTeacherPage("teacherLiveQuiz");
    renderHostQuestionView();
    startHostQuestionTimer();
}

function renderHostQuestionView() {
    if (!activeHostCompetition) return;

    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    const question = normalizeLiveQuestion(activeHostCompetition.questions[qIdx]);
    if (!question) return;

    document.getElementById("tLiveSubjectPill").textContent = `📚 ${activeHostCompetition.subject}`;
    document.getElementById("tLiveQuestionNumber").textContent = `Question ${qIdx + 1} of ${activeHostCompetition.totalQuestions}`;
    document.getElementById("tLiveQuestionText").textContent = question.question;

    document.getElementById("tOptTextA").textContent = question.options[0] || "";
    document.getElementById("tOptTextB").textContent = question.options[1] || "";
    document.getElementById("tOptTextC").textContent = question.options[2] || "";
    document.getElementById("tOptTextD").textContent = question.options[3] || "";

    refreshHostAnswerProgress();
    renderHostAnswersTable("tLiveAnswersTable", qIdx);
}

function startHostQuestionTimer() {
    clearInterval(liveTimerInterval);

    const timerElem = document.getElementById("tLiveTimer");
    const ringElem = document.querySelector(".timer-circle-ring");
    if (ringElem) ringElem.className = "timer-circle-ring";

    // Derived from the stored start time so a refreshed host resumes the same countdown.
    const tick = () => {
        const comp = activeHostCompetition;
        if (!comp || comp.phase !== "question") {
            clearInterval(liveTimerInterval);
            return;
        }
        liveTimeRemaining = getLiveQuestionRemainingSeconds({
            questionDuration: comp.questionDuration,
            questionStartTime: comp.questionStartTime
        });

        if (timerElem) timerElem.textContent = liveTimeRemaining;
        if (ringElem) {
            if (liveTimeRemaining <= 10) {
                ringElem.className = "timer-circle-ring danger";
            } else if (liveTimeRemaining <= 25) {
                ringElem.className = "timer-circle-ring warning";
            }
        }

        if (liveTimeRemaining <= 0) {
            clearInterval(liveTimerInterval);
            onQuestionTimerEndHost();
        }
    };

    tick();
    liveTimerInterval = setInterval(tick, 1000);
}

function forceEndQuestionTimer() {
    clearInterval(liveTimerInterval);
    liveTimeRemaining = 0;
    onQuestionTimerEndHost();
}

/* =====================================================
   QUESTION RESULT SCREEN & BAR GRAPH
===================================================== */

async function onQuestionTimerEndHost() {
    const comp = activeHostCompetition;
    if (!comp || comp.phase !== "question") return;

    comp.phase = "feedback";
    const qIdx = comp.currentQuestionIndex || 0;
    const question = normalizeLiveQuestion(comp.questions[qIdx]);

    // Late submissions are rejected by the rules, so the tally is final after grading settles.
    await waitForLiveGrading();

    const summary = summarizeHostAnswers(qIdx);
    const totalParticipants = comp.participantCount || 0;
    const totalAnswered = summary.total;
    const unanswered = Math.max(0, totalParticipants - totalAnswered);

    console.log("[QUIZ DEBUG] Question", qIdx + 1, "ended. Answers:", totalAnswered, "/", totalParticipants);

    try {
        await liveCompetitionRef(comp.code).update({
            status: "active",
            phase: "feedback",
            questionEndedAt: firebase.firestore.FieldValue.serverTimestamp(),
            [`answersSummary.${qIdx}`]: summary,
            [`revealedAnswers.${qIdx}`]: question.answer
        });
    } catch (err) {
        console.error("[QUIZ DEBUG] Feedback phase update failed:", err.code || err.message);
        showToast(`⚠️ ${describeLiveError(err, "Revealing the result").message}`);
    }
    persistHostCompetition();

    renderHostResultScreen(question, summary, totalParticipants, totalAnswered, unanswered);
    renderHostAnswersTable("tResultAnswersTable", qIdx);
    showTeacherPage("teacherResult");
}

function renderHostResultScreen(question, summary, totalParticipants, totalAnswered, unanswered) {
    document.getElementById("tResultQuestionTitle").textContent = question.question;

    const countA = summary[0] || 0;
    const countB = summary[1] || 0;
    const countC = summary[2] || 0;
    const countD = summary[3] || 0;

    const baseTotal = totalAnswered > 0 ? totalAnswered : 1;
    const pctA = Math.round((countA / baseTotal) * 100);
    const pctB = Math.round((countB / baseTotal) * 100);
    const pctC = Math.round((countC / baseTotal) * 100);
    const pctD = Math.round((countD / baseTotal) * 100);

    // Option text previews
    document.getElementById("previewA").textContent = question.options[0] || "A";
    document.getElementById("previewB").textContent = question.options[1] || "B";
    document.getElementById("previewC").textContent = question.options[2] || "C";
    document.getElementById("previewD").textContent = question.options[3] || "D";

    // Set values
    document.getElementById("valBarA").textContent = `${countA} (${pctA}%)`;
    document.getElementById("valBarB").textContent = `${countB} (${pctB}%)`;
    document.getElementById("valBarC").textContent = `${countC} (${pctC}%)`;
    document.getElementById("valBarD").textContent = `${countD} (${pctD}%)`;

    // Reset column highlight
    ["A", "B", "C", "D"].forEach(letter => {
        const col = document.getElementById(`colBar${letter}`);
        if (col) col.classList.remove("is-correct-column");
    });

    const correctLetter = String.fromCharCode(65 + question.answer);
    const correctCol = document.getElementById(`colBar${correctLetter}`);
    if (correctCol) correctCol.classList.add("is-correct-column");

    // Animate bar pillars
    setTimeout(() => {
        document.getElementById("pillarA").style.height = `${pctA}%`;
        document.getElementById("pillarB").style.height = `${pctB}%`;
        document.getElementById("pillarC").style.height = `${pctC}%`;
        document.getElementById("pillarD").style.height = `${pctD}%`;
    }, 100);

    // Correct Answer Text
    const correctText = question.options[question.answer];
    document.getElementById("tCorrectAnswerText").textContent = `Option ${correctLetter} — "${correctText}" — CORRECT ANSWER ✓`;

    // Metrics
    document.getElementById("tTotalAnsweredCount").textContent = totalAnswered;
    document.getElementById("tTotalUnansweredCount").textContent = unanswered;

    const correctCount = summary[question.answer] || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    document.getElementById("tAccuracyRate").textContent = `${accuracy}%`;
}

/* =====================================================
   LIVE LEADERBOARD (HOST & STUDENT)
===================================================== */

function calculateSortedLeaderboard(participantsMap) {
    const list = Object.values(participantsMap || {});
    list.sort((a, b) => {
        if ((b.score || 0) !== (a.score || 0)) {
            return (b.score || 0) - (a.score || 0);
        }
        if ((b.correctAnswers || 0) !== (a.correctAnswers || 0)) {
            return (b.correctAnswers || 0) - (a.correctAnswers || 0);
        }
        return (timestampToMillis(a.joinedAt) || 0) - (timestampToMillis(b.joinedAt) || 0);
    });
    return list;
}

async function showLiveLeaderboard() {
    const comp = activeHostCompetition;
    if (!comp) return;

    const qIdx = comp.currentQuestionIndex || 0;
    const isLastQuestion = qIdx >= comp.totalQuestions - 1;

    try {
        await liveCompetitionRef(comp.code).update({ status: "active", phase: "leaderboard" });
    } catch (err) {
        alert(`⚠️ ${describeLiveError(err, "Showing the leaderboard").message}`);
        return;
    }
    comp.phase = "leaderboard";
    persistHostCompetition();

    const nextBtn = document.getElementById("tNextQuestionBtn");
    if (nextBtn) {
        nextBtn.textContent = isLastQuestion ? "🏆 Finish Quiz & View Final Champions Podium" : `Next Question (Q${qIdx + 2}) ➡️`;
    }
    document.getElementById("tLeaderboardSubtitle").textContent = `Rankings after Question ${qIdx + 1} of ${comp.totalQuestions}`;

    // Scores are written by grading transactions; the participants listener keeps this table current.
    renderLeaderboardTable("tLeaderboardTableContainer", calculateSortedLeaderboard(comp.participants), null);
    showTeacherPage("teacherLeaderboard");
}

function renderLeaderboardTable(containerId, leaderboard, highlightPlayerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!leaderboard || leaderboard.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--muted);">No player data recorded yet.</p>`;
        return;
    }

    let html = `
        <table class="live-rank-table">
            <thead>
                <tr>
                    <th style="width: 70px;">Rank</th>
                    <th>Student Name</th>
                    <th style="text-align: right;">Total Points</th>
                </tr>
            </thead>
            <tbody>
    `;

    leaderboard.forEach((p, idx) => {
        const rank = idx + 1;
        const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
        const rankDisplay = medals[rank] ? `${medals[rank]} ${rank}` : `#${rank}`;
        const isSelf = highlightPlayerId && highlightPlayerId === (p.id || p.participantId);
        const displayName = escapeHtml(p.studentName || p.name || "Student");
        const initial = displayName.charAt(0).toUpperCase();

        html += `
            <tr class="live-rank-row ${isSelf ? 'current-player-row' : ''}">
                <td class="rank-badge-cell">${rankDisplay}</td>
                <td>
                    <div class="player-info-cell">
                        <span class="player-avatar">${initial}</span>
                        <strong>${displayName}</strong>
                        ${isSelf ? '<span class="score-delta-pill">YOU</span>' : ''}
                    </div>
                </td>
                <td class="player-score-cell">${(p.score || 0).toLocaleString()} pts</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderDetailedLeaderboardTable(containerId, leaderboard, highlightPlayerId, totalQuestions) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!leaderboard || leaderboard.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--muted);">No player data recorded yet.</p>`;
        return;
    }

    let html = `
        <table class="live-rank-table detailed-rank-table">
            <thead>
                <tr>
                    <th style="width: 60px;">Rank</th>
                    <th>Student Name</th>
                    <th style="text-align: right;">Score</th>
                    <th style="text-align: center;">Correct</th>
                    <th style="text-align: center;">Wrong</th>
                    <th style="text-align: center;">Accuracy</th>
                </tr>
            </thead>
            <tbody>
    `;

    leaderboard.forEach((p, idx) => {
        const rank = idx + 1;
        const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
        const rankDisplay = medals[rank] ? `${medals[rank]} ${rank}` : `#${rank}`;
        const isSelf = highlightPlayerId && highlightPlayerId === (p.id || p.participantId);
        const displayName = escapeHtml(p.studentName || p.name || "Student");
        const initial = displayName.charAt(0).toUpperCase();
        const correct = p.correctAnswers || 0;
        const wrong = p.wrongAnswers || 0;
        const total = totalQuestions || (correct + wrong) || 1;
        const pct = Math.round((correct / total) * 100);

        html += `
            <tr class="live-rank-row ${isSelf ? 'current-player-row' : ''}">
                <td class="rank-badge-cell">${rankDisplay}</td>
                <td>
                    <div class="player-info-cell">
                        <span class="player-avatar">${initial}</span>
                        <strong>${displayName}</strong>
                        ${isSelf ? '<span class="score-delta-pill">YOU</span>' : ''}
                    </div>
                </td>
                <td class="player-score-cell" style="text-align: right; font-weight: 800;">${(p.score || 0).toLocaleString()} pts</td>
                <td style="text-align: center; color: #10b981; font-weight: 700;">${correct}</td>
                <td style="text-align: center; color: #ef4444; font-weight: 700;">${wrong}</td>
                <td style="text-align: center; font-weight: 700;">${pct}%</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

async function proceedToNextQuestion() {
    if (!activeHostCompetition) return;

    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    if (qIdx >= activeHostCompetition.totalQuestions - 1) {
        await showFinalPodiumHost();
        return;
    }
    await goToLiveQuestion(qIdx + 1);
}

async function endLiveQuiz() {
    if (!activeHostCompetition) return;
    if (!confirm("End the quiz now for every student and show the final leaderboard?")) return;
    clearInterval(liveTimerInterval);
    await showFinalPodiumHost();
}

/* =====================================================
   FINAL PODIUM & WINNERS CELEBRATION
===================================================== */

async function showFinalPodiumHost() {
    const comp = activeHostCompetition;
    if (!comp) return;

    showLoading("Finishing quiz on all devices...");
    await waitForLiveGrading();

    try {
        await liveCompetitionRef(comp.code).update({
            status: "completed",
            phase: "finished",
            completedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (err) {
        hideLoading();
        alert(`⚠️ ${describeLiveError(err, "Ending the quiz").message}`);
        return;
    }
    // Read final scores straight from the server so the podium/archive include the last grading writes.
    try {
        const finalSnap = await liveCompetitionRef(comp.code).collection("participants").get();
        const finalMap = {};
        finalSnap.forEach(doc => { finalMap[doc.id] = { id: doc.id, participantId: doc.id, ...doc.data() }; });
        comp.participants = finalMap;
        comp.participantCount = finalSnap.size;
    } catch (err) {
        console.warn("[QUIZ DEBUG] Final participants read notice:", err.code || err.message);
    }
    hideLoading();

    console.log("[QUIZ DEBUG] Quiz finished: phase = finished, status = completed for", comp.code);

    comp.status = "completed";
    comp.phase = "finished";
    persistHostCompetition();

    renderHostPodium();
    createConfetti();
    showTeacherPage("teacherPodium");

    archiveLiveCompetitionResults().catch(err => console.warn("[QUIZ DEBUG] Result archive notice:", err.code || err.message));
}

function renderHostPodium() {
    const comp = activeHostCompetition;
    if (!comp) return;

    const leaderboard = calculateSortedLeaderboard(comp.participants);
    const winner1 = leaderboard[0] || { name: "Champion", score: 0 };
    const winner2 = leaderboard[1] || { name: "Runner Up", score: 0 };
    const winner3 = leaderboard[2] || { name: "3rd Place", score: 0 };

    document.getElementById("podium1Name").textContent = winner1.studentName || winner1.name || "Champion";
    document.getElementById("podium1Score").textContent = `${(winner1.score || 0).toLocaleString()} pts`;

    document.getElementById("podium2Name").textContent = winner2.studentName || winner2.name || "Runner Up";
    document.getElementById("podium2Score").textContent = `${(winner2.score || 0).toLocaleString()} pts`;

    document.getElementById("podium3Name").textContent = winner3.studentName || winner3.name || "3rd Place";
    document.getElementById("podium3Score").textContent = `${(winner3.score || 0).toLocaleString()} pts`;

    renderDetailedLeaderboardTable("tFinalLeaderboardTableContainer", leaderboard, null, comp.totalQuestions);
}

function buildCompetitionHistoryRecord(comp, leaderboard) {
    const winner = leaderboard[0] ? (leaderboard[0].studentName || leaderboard[0].name) : "No Winner";
    const totalScores = leaderboard.reduce((sum, p) => sum + (p.score || 0), 0);
    const avgScore = leaderboard.length > 0 ? Math.round(totalScores / leaderboard.length) : 0;

    return {
        code: comp.code,
        subject: comp.subject,
        title: comp.title || comp.subject,
        competitionType: comp.competitionType || "auto",
        teacherId: currentTeacher ? (currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01") : "TEACHER-01",
        teacherName: currentTeacher ? currentTeacher.name : "Professor",
        date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        totalQuestions: comp.totalQuestions,
        participantCount: leaderboard.length,
        winner: winner,
        averageScore: avgScore,
        leaderboard: leaderboard.map(p => ({
            id: p.id,
            participantId: p.id,
            studentName: p.studentName || p.name || "Student",
            score: p.score || 0,
            correctAnswers: p.correctAnswers || 0,
            wrongAnswers: p.wrongAnswers || 0
        }))
    };
}

// Persists final results once per competition (history + one result doc per student).
async function archiveLiveCompetitionResults() {
    const comp = activeHostCompetition;
    if (!comp || comp.resultsArchived) return;
    comp.resultsArchived = true;

    const leaderboard = calculateSortedLeaderboard(comp.participants);
    const historyRecord = buildCompetitionHistoryRecord(comp, leaderboard);
    saveStoredCompetitionHistory(historyRecord);

    const serverNow = firebase.firestore.FieldValue.serverTimestamp();
    const batch = db.batch();
    batch.set(db.collection("competitionHistory").doc(comp.code), { ...historyRecord, hostUid: comp.hostUid || null, timestamp: serverNow });
    leaderboard.forEach((p, idx) => {
        const correct = p.correctAnswers || 0;
        batch.set(db.collection("competitionResults").doc(`${comp.code}_${p.id}`), {
            competitionCode: comp.code,
            studentId: p.id,
            studentName: p.studentName || p.name || "Student",
            finalScore: p.score || 0,
            rank: idx + 1,
            totalQuestions: comp.totalQuestions,
            correctAnswers: correct,
            wrongAnswers: p.wrongAnswers || 0,
            percentage: comp.totalQuestions > 0 ? Math.round((correct / comp.totalQuestions) * 100) : 0,
            hostUid: comp.hostUid || null,
            submittedAt: serverNow
        });
    });
    batch.update(liveCompetitionRef(comp.code), { resultsArchived: true });

    await batch.commit();
    persistHostCompetition();
    console.log("[QUIZ DEBUG] Final results archived for", comp.code, "| players:", leaderboard.length);
}

async function saveAndFinishCompetition() {
    if (!activeHostCompetition) {
        showTeacherPage("teacherDashboard");
        return;
    }

    showLoading("Archiving Competition Results...");
    try {
        await archiveLiveCompetitionResults();
    } catch (err) {
        console.warn("[QUIZ DEBUG] History save notice:", err.code || err.message);
    }

    cleanupActiveHostListeners();
    activeHostCompetition = null;
    localStorage.removeItem("skillquest_active_competition");

    hideLoading();
    showTeacherPage("teacherDashboard");
    showToast("🏆 Competition archived successfully!");
}

// Reconnects a refreshed/re-logged-in teacher to the competition they were hosting.
async function restoreHostCompetition() {
    if (activeHostCompetition || typeof db === "undefined" || !db) return;

    let saved = null;
    try { saved = JSON.parse(localStorage.getItem("skillquest_active_competition") || "null"); } catch (e) { }
    if (!saved || !saved.code) return;

    try {
        const ref = liveCompetitionRef(saved.code);
        const snap = await ref.get();
        const data = snap.exists ? snap.data() : null;
        if (!data || data.status === "cancelled" || (getLivePhase(data) === "finished" && data.resultsArchived)) {
            localStorage.removeItem("skillquest_active_competition");
            return;
        }

        // Competitions created before hostUid existed are claimed by the teacher who resumes them.
        if (!data.hostUid && auth && auth.currentUser) {
            await ref.update({ hostUid: auth.currentUser.uid });
            data.hostUid = auth.currentUser.uid;
        }

        // The answer key lives with the host: local copy first, then the host-only subdocument.
        let questions = saved.questions;
        if (!Array.isArray(questions) || questions.length === 0 || questions.some(q => typeof q.answer !== "number")) {
            const keySnap = await ref.collection("hostData").doc("answerKey").get();
            questions = keySnap.exists ? keySnap.data().questions : (data.questions || []);
        }

        activeHostCompetition = {
            ...saved,
            ...data,
            phase: getLivePhase(data),
            questions: questions,
            participants: {},
            answersByQuestion: {}
        };
        attachHostCompetitionListeners(saved.code);
        updateTeacherDashboardStats();
        console.log("[QUIZ DEBUG] Host competition restored:", saved.code, "| phase:", activeHostCompetition.phase);
    } catch (err) {
        console.warn("[QUIZ DEBUG] Host restore notice:", err.code || err.message);
    }
}

/* =====================================================
   COMPETITION HISTORY (TEACHER PORTAL)
===================================================== */

function getStoredCompetitionHistory() {
    try {
        const data = localStorage.getItem("skillquest_competition_history");
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveStoredCompetitionHistory(record) {
    const list = getStoredCompetitionHistory();
    list.unshift(record);
    localStorage.setItem("skillquest_competition_history", JSON.stringify(list));
}

async function loadTeacherCompetitionHistory() {
    const container = document.getElementById("teacherHistoryList");
    if (!container) return;

    container.innerHTML = `<p style="text-align:center; padding: 30px; color: var(--muted);">Loading history records... ⏳</p>`;

    let records = getStoredCompetitionHistory();

    // Fetch from Firestore if available
    if (typeof db !== "undefined") {
        try {
            const snapshot = await db.collection("competitionHistory")
                .orderBy("timestamp", "desc")
                .limit(20)
                .get();

            if (!snapshot.empty) {
                const cloudRecords = [];
                snapshot.forEach(doc => {
                    cloudRecords.push({ id: doc.id, ...doc.data() });
                });
                if (cloudRecords.length > 0) records = cloudRecords;
            }
        } catch (e) {
            console.warn("Firestore fetch history fallback:", e);
        }
    }

    if (records.length === 0) {
        container.innerHTML = `
            <div class="empty-history" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                No competitions completed yet. Host your first live competition! 🚀
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    records.forEach((comp, idx) => {
        const card = document.createElement("div");
        card.className = "comp-history-card";
        card.innerHTML = `
            <div>
                <div class="comp-card-header">
                    <span class="comp-card-code">${comp.code}</span>
                    <span class="comp-card-badge">${comp.subject}</span>
                </div>
                <div class="comp-card-date">📅 ${comp.date || "Recent"}</div>

                <div class="comp-stats-grid">
                    <div class="comp-stats-item">
                        <span>Questions</span>
                        <strong>${comp.totalQuestions || 5} MCQs</strong>
                    </div>
                    <div class="comp-stats-item">
                        <span>Participants</span>
                        <strong>👥 ${comp.participantCount || 0} Students</strong>
                    </div>
                </div>

                <div class="comp-winner-row">
                    <span>👑 Winner:</span>
                    <strong>${comp.winner || "Student"}</strong>
                </div>
            </div>

            <button class="secondary-btn view-details-btn" onclick="openCompetitionDetailModal(${idx})">
                🔍 View Leaderboard Standings
            </button>
        `;
        container.appendChild(card);
    });

    // Store reference for modal viewing
    window.lastLoadedTeacherHistory = records;
}

function openCompetitionDetailModal(index) {
    const records = window.lastLoadedTeacherHistory || getStoredCompetitionHistory();
    const comp = records[index];
    if (!comp) return;

    document.getElementById("modalCompTitle").textContent = `${comp.subject} Competition`;
    document.getElementById("modalCompMeta").textContent = `Code: ${comp.code} | Date: ${comp.date || "Recent"}`;
    document.getElementById("modalCompSubject").textContent = comp.subject;
    document.getElementById("modalCompQuestions").textContent = comp.totalQuestions || 5;
    document.getElementById("modalCompParticipants").textContent = `${comp.participantCount || 0} Students`;
    document.getElementById("modalCompWinner").textContent = comp.winner || "-";

    renderLeaderboardTable("modalLeaderboardContent", comp.leaderboard || [], null);

    document.getElementById("competitionDetailModal").classList.remove("hidden");
}

function closeCompetitionDetailModal() {
    const modal = document.getElementById("competitionDetailModal");
    if (modal) modal.classList.add("hidden");
}

/* ==========================================================================
   STUDENT LIVE COMPETITION CLIENT
   Every screen is derived from three Firestore listeners:
   the competition doc, its participants, and this student's own answers.
   ========================================================================== */

const STUDENT_SESSION_KEY = "skillquest_student_session";
const STUDENT_LAST_NAME_KEY = "skillquest_live_last_name";
const STUDENT_SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000;

let liveJoinInProgress = false;
let liveQrScanner = null;
// Server time minus local time, measured at join, so every phone counts down the same seconds.
let liveClockOffsetMs = 0;

function openStudentJoinPage(prefillCode) {
    hideAllPortals();
    const app = document.getElementById("studentLiveApp");
    if (app) app.classList.remove("hidden");

    showStudentLiveScreen("studentJoinPage");

    const errElem = document.getElementById("sJoinError");
    if (errElem) errElem.textContent = "";

    const nameInput = document.getElementById("sJoinNameInput");
    if (nameInput && !nameInput.value) {
        let rememberedName = "";
        try { rememberedName = localStorage.getItem(STUDENT_LAST_NAME_KEY) || ""; } catch (e) { }
        nameInput.value = (userData && userData.name) || (currentUser && currentUser.displayName) || rememberedName;
    }
    if (nameInput && nameInput.value) {
        updateStudentLivePlayerName(nameInput.value);
    }

    // QR links open as ?join=CODE — prefill it so the student only types a name.
    const joinCode = prefillCode || getJoinCodeFromUrl();
    if (joinCode) {
        console.log("[QUIZ DEBUG] Join code from QR/URL:", joinCode);
        const codeInput = document.getElementById("sJoinCodeInput");
        if (codeInput) codeInput.value = joinCode;
        previewLiveCompetition(joinCode);
        if (nameInput && !nameInput.value) nameInput.focus();
    }

    try {
        assertFirebaseReady();
    } catch (err) {
        if (errElem) errElem.textContent = err.message;
    }
}

function getJoinCodeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return normalizeCompetitionCode(urlParams.get("join") || urlParams.get("code") || urlParams.get("competitionCode") || urlParams.get("room") || "");
}

async function previewLiveCompetition(code) {
    const preview = document.getElementById("sJoinRoomPreview");
    if (!preview || typeof db === "undefined" || !db) return;

    const normalizedCode = normalizeCompetitionCode(code);
    if (!LIVE_CODE_PATTERN.test(normalizedCode)) return;

    try {
        const result = await lookupLiveCompetitionDocument(normalizedCode);
        const snap = result.snapshot;
        if (!snap || !snap.exists) {
            preview.innerHTML = `<p>⚠️ Competition <strong>${escapeHtml(normalizedCode)}</strong> was not found.</p>`;
        } else {
            const data = snap.data();
            const total = data.totalQuestions || (data.questions ? data.questions.length : 0);
            preview.innerHTML = `<h4>📚 ${escapeHtml(data.title || data.subject || "Live Competition")}</h4><p>Room: <strong>${escapeHtml(normalizedCode)}</strong> • ${total} Questions</p>`;
        }
        preview.classList.remove("hidden");
    } catch (err) {
        console.warn("[QUIZ DEBUG] Preview lookup notice:", err && (err.code || err.message));
        preview.innerHTML = `<p>⚠️ ${escapeHtml((err && err.message) || "Unable to read this competition.")}</p>`;
        preview.classList.remove("hidden");
    }
}

function updateStudentLivePlayerName(name) {
    const badge = document.getElementById("sLivePlayerNameBadge");
    if (badge) {
        const cleanName = (name || "").trim();
        badge.textContent = cleanName ? `Hi, ${cleanName}` : "Student";
    }
}

function showStudentLiveScreen(screenId) {
    const target = document.getElementById(screenId);
    if (target && target.classList.contains("active") && !target.classList.contains("hidden")) return;

    document.querySelectorAll(".student-live-page, .student-join-screen").forEach(s => {
        s.classList.add("hidden");
        s.classList.remove("active");
    });

    if (target) {
        target.classList.remove("hidden");
        target.classList.add("active");
    }

    window.scrollTo(0, 0);
}

// Accepts a raw code ("skq-914967", "914967") or a QR URL (".../?join=SKQ-914967").
function normalizeCompetitionCode(rawCode) {
    if (rawCode === null || rawCode === undefined) return "";

    let source = String(rawCode).trim();
    if (!source) return "";

    try {
        const parsedUrl = new URL(source);
        const urlKeys = ["join", "code", "room", "competition", "competitionCode"];
        let foundInParams = false;
        for (const key of urlKeys) {
            const value = parsedUrl.searchParams.get(key);
            if (value && value.trim()) {
                source = value.trim();
                foundInParams = true;
                break;
            }
        }
        // Also check URL path segments like /join/SKQ-914967
        if (!foundInParams) {
            const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
            source = pathParts.find(part => /^(SKQ-?)?\d{6}$/i.test(part)) || "";
        }
    } catch (e) {
        // Not a URL: treat the payload as a raw code.
    }

    const cleaned = source.replace(/[^A-Z0-9-]/gi, "").toUpperCase();
    const match = cleaned.match(/^(?:SKQ-?)?(\d{6})$/);
    return match ? `SKQ-${match[1]}` : cleaned;
}

function ensureStudentCompetitionProjectMatches() {
    const expectedProjectId = "quizquest-3d82a";
    const actualProjectId = getFirebaseProjectId();
    if (actualProjectId && actualProjectId !== expectedProjectId) {
        throw liveError("CONFIG", `This live quiz page is connected to Firebase project "${actualProjectId}", but the active competition data is in "${expectedProjectId}". Refresh or redeploy the student site to the correct Firebase project.`);
    }
}

async function lookupLiveCompetitionDocument(code) {
    const normalizedCode = normalizeCompetitionCode(code);
    console.log("[QUIZ DEBUG] Input code:", code);
    console.log("[QUIZ DEBUG] Normalized code:", normalizedCode);
    console.log("[QUIZ DEBUG] Student Firebase projectId:", getFirebaseProjectId());
    console.log("[QUIZ DEBUG] Firestore collection:", LIVE_COLLECTION);
    console.log("[QUIZ DEBUG] Firestore document ID:", normalizedCode);
    console.log("[QUIZ DEBUG] Lookup path:", `${LIVE_COLLECTION}/${normalizedCode}`);

    ensureStudentCompetitionProjectMatches();

    const ref = liveCompetitionRef(normalizedCode);
    try {
        const snap = await ref.get();
        console.log("[QUIZ DEBUG] Document exists:", !!snap && snap.exists);
        if (snap && snap.exists) {
            console.log("[QUIZ DEBUG] Competition code from Firestore:", snap.data()?.competitionCode || snap.data()?.code || normalizedCode);
            console.log("[QUIZ DEBUG] Competition phase:", getLivePhase(snap.data() || {}));
            console.log("[QUIZ DEBUG] Competition type:", snap.data()?.competitionType || "unknown");
            return { snapshot: snap, source: "doc", code: normalizedCode };
        }
    } catch (err) {
        console.warn("[QUIZ DEBUG] Direct live competition lookup failed:", err && (err.code || err.message));
        if (err && err.code === "permission-denied") {
            throw describeLiveError(err, "Reading the competition");
        }
    }

    const candidateFields = ["competitionCode", "code"];
    for (const field of candidateFields) {
        try {
            const querySnap = await db.collection(LIVE_COLLECTION).where(field, "==", normalizedCode).limit(1).get();
            if (!querySnap.empty) {
                const doc = querySnap.docs[0];
                const data = doc.data() || {};
                console.log("[QUIZ DEBUG] Document exists via field query:", true, "field:", field);
                console.log("[QUIZ DEBUG] Competition code from Firestore:", data.competitionCode || data.code || normalizedCode);
                console.log("[QUIZ DEBUG] Competition phase:", getLivePhase(data));
                console.log("[QUIZ DEBUG] Competition type:", data.competitionType || "unknown");
                return { snapshot: doc, source: `query:${field}`, code: normalizedCode };
            }
        } catch (err) {
            console.warn("[QUIZ DEBUG] Field query lookup failed for", field, err && (err.code || err.message));
        }
    }

    console.log("[QUIZ DEBUG] Document exists:", false);
    return { snapshot: null, source: "doc", code: normalizedCode };
}

/* --- Session persistence (code + name only) --- */

function saveStudentSession(session) {
    try {
        localStorage.setItem(STUDENT_SESSION_KEY, JSON.stringify({
            code: session.code,
            studentName: session.studentName,
            participantId: session.studentId,
            savedAt: Date.now()
        }));
        localStorage.setItem(STUDENT_LAST_NAME_KEY, session.studentName);
    } catch (e) { }
}

function loadStudentSession() {
    try {
        const saved = JSON.parse(localStorage.getItem(STUDENT_SESSION_KEY) || "null");
        if (saved && saved.code && saved.studentName && Date.now() - (saved.savedAt || 0) < STUDENT_SESSION_MAX_AGE_MS) {
            return saved;
        }
    } catch (e) { }
    return null;
}

function clearStudentSession() {
    try { localStorage.removeItem(STUDENT_SESSION_KEY); } catch (e) { }
}

/* --- Join --- */

// Students without a portal account get a Firebase anonymous identity; its uid is
// their participant ID, which the security rules use to protect their records.
async function ensureLiveAuthUser() {
    assertFirebaseReady();

    let user = auth.currentUser;
    if (!user) {
        user = await new Promise(resolve => {
            const unsubscribe = auth.onAuthStateChanged(u => {
                resolve(u);
                setTimeout(() => unsubscribe(), 0);
            });
        });
    }
    if (!user) {
        try {
            user = (await auth.signInAnonymously()).user;
        } catch (err) {
            throw describeLiveError(err, "Signing in to the live quiz");
        }
    }
    return user;
}

// Looks up liveCompetitions/{code}, registers this device as one participant,
// and subscribes to the shared state. Used by manual join, QR join and refresh restore.
async function enterLiveCompetition(rawCode, studentName, options = {}) {
    const enteredCode = String(rawCode ?? "").trim();
    const code = normalizeCompetitionCode(rawCode);
    const name = String(studentName || "").trim().substring(0, 25);

    console.log("[LIVE JOIN] entered code:", enteredCode);
    console.log("[LIVE JOIN] normalized code:", code);
    console.log("[LIVE JOIN] Firebase project:", getFirebaseProjectId());

    if (!code) {
        throw liveError("INVALID", "INVALID CODE: Please enter the competition code (for example SKQ-482731).");
    }
    if (!LIVE_CODE_PATTERN.test(code)) {
        throw liveError("INVALID", `INVALID CODE: "${code}" is not a valid competition code. Codes look like SKQ-482731.`);
    }
    if (!name) {
        throw liveError("INVALID", "Please enter your name.");
    }

    assertFirebaseReady();
    ensureStudentCompetitionProjectMatches();

    const user = await ensureLiveAuthUser();
    const competitionRef = liveCompetitionRef(code);
    console.log("[LIVE JOIN] looking up:", `liveCompetitions/${code}`);

    let lookupResult;
    try {
        lookupResult = await lookupLiveCompetitionDocument(code);
    } catch (err) {
        console.error("[LIVE JOIN] lookup error:", err && (err.code || err.message), err);
        throw describeLiveError(err, "Reading the competition");
    }

    const snap = lookupResult.snapshot;
    console.log("[LIVE JOIN] competition exists:", !!snap && snap.exists);
    if (!snap || !snap.exists) {
        throw liveError("NOT_FOUND", `NOT FOUND: Competition ${code} does not exist in Firebase project "${getFirebaseProjectId()}". Check the code with your teacher.`);
    }

    const comp = snap.data();
    const phase = getLivePhase(comp);
    console.log("[LIVE JOIN] competition phase:", phase);

    if (phase === "cancelled") {
        throw liveError("ENDED", "ENDED COMPETITION: The host cancelled this competition.");
    }
    if (phase === "finished" && !options.restoring) {
        throw liveError("ENDED", "ENDED COMPETITION: This competition has already finished.");
    }
    if (phase !== "finished" && comp.expiresAt && new Date(comp.expiresAt) < new Date()) {
        throw liveError("EXPIRED", "EXPIRED COMPETITION: This competition code has expired. Ask your teacher for a new one.");
    }

    const participantId = user.uid;
    console.log("[QUIZ DEBUG] Participant ID:", participantId);

    // One participant doc per device identity: refreshes, reconnects and repeat scans reuse it.
    const participantRef = competitionRef.collection("participants").doc(participantId);
    const serverNow = firebase.firestore.FieldValue.serverTimestamp();
    let sentAt = Date.now();
    try {
        const existing = await participantRef.get();
        sentAt = Date.now();
        if (existing.exists) {
            await participantRef.update({ studentName: name, name: name, connected: true, lastSeen: serverNow });
        } else if (phase === "finished") {
            throw liveError("ENDED", "ENDED COMPETITION: This competition has already finished.");
        } else {
            await participantRef.set({
                participantId: participantId,
                id: participantId,
                studentName: name,
                name: name,
                competitionCode: code,
                connected: true,
                joinedAt: serverNow,
                lastSeen: serverNow
            });
        }
    } catch (err) {
        throw describeLiveError(err, "Registering in the lobby");
    }

    try {
        const fresh = await participantRef.get({ source: "server" });
        const serverMs = timestampToMillis(fresh.get("lastSeen"));
        if (serverMs) liveClockOffsetMs = serverMs - Math.round((sentAt + Date.now()) / 2);
    } catch (e) { }

    stopStudentLiveListeners();
    currentStudentLiveSession = {
        code: code,
        studentId: participantId,
        studentName: name,
        state: comp,
        phase: null,
        competition: buildStudentCompetitionView(comp),
        renderedQuestionIndex: -1,
        answers: {},
        pendingAnswer: null,
        participants: [],
        me: null,
        celebrated: false
    };
    saveStudentSession(currentStudentLiveSession);

    hideAllPortals();
    const app = document.getElementById("studentLiveApp");
    if (app) app.classList.remove("hidden");
    updateStudentLivePlayerName(name);

    renderStudentLiveState(comp);
    attachStudentLiveListeners(code);

    return { competitionData: comp, competitionDocId: code, studentId: participantId };
}

// The ONE join entry point for both the Join button and the QR scanner.
async function joinLiveCompetition(rawCode, studentName) {
    const errElem = document.getElementById("sJoinError");
    const codeInput = document.getElementById("sJoinCodeInput");
    const nameInput = document.getElementById("sJoinNameInput");

    const code = rawCode !== undefined ? rawCode : (codeInput ? codeInput.value : "");
    const name = studentName !== undefined ? studentName : (nameInput ? nameInput.value : "");

    if (liveJoinInProgress) return;
    liveJoinInProgress = true;
    if (errElem) errElem.textContent = "";
    showLoading("Connecting to Live Lobby...");

    try {
        const result = await enterLiveCompetition(code, name);
        console.log("[QUIZ DEBUG] Joined competition:", result.competitionDocId);
        showToast("Connected to waiting room! ⚡");
    } catch (err) {
        const friendly = describeLiveError(err, "Joining the competition");
        if (errElem) errElem.textContent = friendly.message;
    } finally {
        hideLoading();
        liveJoinInProgress = false;
    }
}

async function stopLiveQrScanner() {
    if (liveQrScanner) {
        try {
            if (liveQrScanner.isScanning) await liveQrScanner.stop();
        } catch (e) { }
        liveQrScanner = null;
    }
    const scannerContainer = document.getElementById("sQrScannerContainer");
    if (scannerContainer) scannerContainer.classList.add("hidden");
}

async function handleScannedCompetitionCode(decodedText) {
    console.log("[QR JOIN] Raw scanned value:", decodedText);

    const extractedCode = normalizeCompetitionCode(decodedText);
    console.log("[QR JOIN] Extracted competition code:", extractedCode);
    console.log("[QR JOIN] Normalized competition code:", extractedCode);

    if (!extractedCode || !LIVE_CODE_PATTERN.test(extractedCode)) {
        const errElem = document.getElementById("sJoinError");
        if (errElem) errElem.textContent = "INVALID CODE: This QR code does not contain a valid competition code.";
        return;
    }

    const codeInput = document.getElementById("sJoinCodeInput");
    if (codeInput) codeInput.value = extractedCode;
    previewLiveCompetition(extractedCode);

    const nameInput = document.getElementById("sJoinNameInput");
    const enteredName = nameInput ? nameInput.value.trim() : "";
    console.log("[QR JOIN] Calling existing join function:", extractedCode, enteredName ? "with name" : "waiting for name");

    if (enteredName) {
        try {
            await joinLiveCompetition(extractedCode, enteredName);
            console.log("[QR JOIN] Join successful:", extractedCode);
        } catch (err) {
            console.error("[QR JOIN] Join failed:", err && (err.code || err.message), err);
            const errElem = document.getElementById("sJoinError");
            if (errElem) errElem.textContent = describeLiveError(err, "Joining the competition").message;
        }
    } else {
        const errElem = document.getElementById("sJoinError");
        if (errElem) errElem.textContent = "";
        showToast("✅ Code scanned! Enter your name and tap Join.");
        if (nameInput) {
            nameInput.focus();
            nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}

async function scanCompetitionQrCode() {
    const scannerContainer = document.getElementById("sQrScannerContainer");
    const scannerEl = document.getElementById("reader");
    const errElem = document.getElementById("sJoinError");

    if (!scannerContainer || !scannerEl || typeof Html5Qrcode === "undefined") {
        errElem.textContent = "QR scanning is not available in this browser. Please enter the code manually.";
        return;
    }

    await stopLiveQrScanner();
    scannerContainer.classList.remove("hidden");
    scannerEl.innerHTML = "";

    const scanner = new Html5Qrcode("reader");
    liveQrScanner = scanner;
    let handled = false;

    const onScanSuccess = async (decodedText) => {
        if (handled) return;
        handled = true;
        await stopLiveQrScanner();
        await handleScannedCompetitionCode(decodedText);
    };

    try {
        await scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 220, height: 220 } }, onScanSuccess, () => { });
        showToast("📷 Scanning for a competition QR code...");
    } catch (scanStartErr) {
        errElem.textContent = "Camera access was denied or unavailable. Please enter the code manually.";
        console.warn("QR scanner start failed:", scanStartErr);
        await stopLiveQrScanner();
    }
}

function stopStudentLiveListeners() {
    [studentUnsubCompetition, studentUnsubParticipants, studentUnsubAnswers].forEach(unsub => {
        if (unsub) {
            try { unsub(); } catch (e) { }
        }
    });
    studentUnsubCompetition = null;
    studentUnsubParticipants = null;
    studentUnsubAnswers = null;
    clearInterval(liveTimerInterval);
}

function exitStudentLiveQuiz() {
    const session = currentStudentLiveSession;
    stopStudentLiveListeners();
    stopLiveQrScanner();

    if (session && typeof db !== "undefined" && db) {
        liveCompetitionRef(session.code).collection("participants").doc(session.studentId)
            .update({ connected: false, lastSeen: firebase.firestore.FieldValue.serverTimestamp() })
            .catch(() => { });
    }
    currentStudentLiveSession = null;

    // Clear session so refresh doesn't auto-rejoin
    clearStudentSession();

    hideAllPortals();
    openStudentPortal();
}

/* --- Real-time listeners --- */

function attachStudentLiveListeners(code) {
    stopStudentLiveListeners();
    const session = currentStudentLiveSession;
    if (!session || typeof db === "undefined" || !db) return;

    const ref = liveCompetitionRef(code);
    const onListenerError = (what) => (err) => {
        console.warn(`[QUIZ DEBUG] ${what} listener error:`, err.code || err.message);
        showToast(`⚠️ ${describeLiveError(err, `Live ${what} updates`).message}`);
    };

    console.log("[QUIZ DEBUG] Listening to", `${LIVE_COLLECTION}/${code}`);

    studentUnsubCompetition = ref.onSnapshot(doc => {
        if (currentStudentLiveSession !== session) return;
        if (!doc.exists) {
            alert("This competition no longer exists.");
            exitStudentLiveQuiz();
            return;
        }
        renderStudentLiveState(doc.data({ serverTimestamps: "estimate" }));
    }, onListenerError("competition"));

    studentUnsubParticipants = ref.collection("participants").onSnapshot(snap => {
        if (currentStudentLiveSession !== session) return;

        const list = [];
        snap.forEach(d => list.push({ id: d.id, participantId: d.id, ...d.data({ serverTimestamps: "estimate" }) }));
        list.sort((a, b) => (timestampToMillis(a.joinedAt) || 0) - (timestampToMillis(b.joinedAt) || 0));
        session.participants = list;
        session.me = list.find(p => p.id === session.studentId) || null;

        renderStudentLobbyList();
        updateStudentScoreBadge();
        if (session.phase === "leaderboard") renderStudentLeaderboard();
        else if (session.phase === "finished") renderStudentFinalResults();
    }, onListenerError("lobby"));

    studentUnsubAnswers = ref.collection("answers")
        .where("participantId", "==", session.studentId)
        .onSnapshot(snap => {
            if (currentStudentLiveSession !== session) return;

            const answers = {};
            snap.forEach(d => {
                const ans = d.data();
                answers[ans.questionIndex] = ans;
            });
            session.answers = answers;
            if (session.pendingAnswer && answers[session.pendingAnswer.questionIndex]) {
                session.pendingAnswer = null;
            }

            if (session.phase === "question") applyStudentAnswerState();
            else if (session.phase === "feedback") renderStudentQuestionResult();
        }, onListenerError("answer"));
}

function buildStudentCompetitionView(comp) {
    // Only question text and options are shown to students, even for older docs that stored answers.
    const questions = (comp.questions || comp.temporaryQuestions || []).map(q => {
        const normalized = normalizeLiveQuestion(q);
        return { question: normalized.question, options: normalized.options };
    });
    return {
        title: comp.title || comp.subject || "Live Quiz",
        subject: comp.subject || "Live Competition",
        questions: questions,
        totalQuestions: comp.totalQuestions || questions.length
    };
}

// Single dispatcher: the competition doc's phase decides which screen every student sees.
function renderStudentLiveState(comp) {
    const session = currentStudentLiveSession;
    if (!session) return;

    session.state = comp;
    session.competition = buildStudentCompetitionView(comp);

    const phase = getLivePhase(comp);
    const qIdx = typeof comp.currentQuestionIndex === "number" ? comp.currentQuestionIndex : 0;
    const phaseChanged = session.phase !== phase;
    session.phase = phase;

    if (phaseChanged || (phase === "question" && session.renderedQuestionIndex !== qIdx)) {
        console.log("[QUIZ DEBUG] Competition phase:", phase, "| question:", qIdx + 1, "of", session.competition.totalQuestions);
    }
    if (phase !== "question") clearInterval(liveTimerInterval);

    if (phase === "cancelled") {
        alert("The host cancelled this competition.");
        exitStudentLiveQuiz();
    } else if (phase === "waiting") {
        renderStudentWaitingRoom();
    } else if (phase === "question") {
        if (phaseChanged || session.renderedQuestionIndex !== qIdx) {
            session.renderedQuestionIndex = qIdx;
            renderStudentQuestionView();
            showStudentLiveScreen("studentLiveQuiz");
            startStudentQuestionTimer();
        }
        applyStudentAnswerState();
    } else if (phase === "feedback") {
        session.renderedQuestionIndex = qIdx;
        renderStudentQuestionResult();
    } else if (phase === "leaderboard") {
        renderStudentLeaderboard();
    } else if (phase === "finished") {
        renderStudentFinalResults();
    }
}

/* --- Lobby --- */

function renderStudentWaitingRoom() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const subTitleElem = document.getElementById("sWaitingSubjectTitle");
    if (subTitleElem) subTitleElem.textContent = `${session.competition.title} • ${session.code}`;

    const playerElem = document.getElementById("sWaitingPlayerName");
    if (playerElem) playerElem.textContent = session.studentName;

    const headingElem = document.getElementById("sWaitingStatusHeading");
    if (headingElem) headingElem.textContent = "Waiting for the host to start the quiz...";

    renderStudentLobbyList();
    showStudentLiveScreen("studentWaitingRoom");
}

function renderStudentLobbyList() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const countElem = document.getElementById("sWaitingStudentCount");
    if (countElem) countElem.textContent = session.participants.length;

    const list = document.getElementById("sWaitingParticipantList");
    if (!list) return;
    list.innerHTML = "";
    session.participants.forEach(p => {
        const chip = document.createElement("div");
        chip.className = "waiting-participant-chip";
        const isMe = p.id === session.studentId;
        chip.textContent = `✓ ${p.studentName || p.name || "Student"}${isMe ? " (you)" : ""}`;
        if (isMe) chip.style.fontWeight = "800";
        list.appendChild(chip);
    });
}

function updateStudentScoreBadge() {
    const session = currentStudentLiveSession;
    const scoreBadge = document.getElementById("sLiveScoreBadge");
    if (session && scoreBadge) {
        scoreBadge.textContent = `Score: ${((session.me && session.me.score) || 0).toLocaleString()} pts`;
    }
}

/* --- Question & answer --- */

function renderStudentQuestionView() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const comp = session.competition;
    const qIdx = session.renderedQuestionIndex >= 0 ? session.renderedQuestionIndex : 0;
    const q = comp.questions[qIdx];
    if (!q) return;

    const titleElem = document.getElementById("sLiveQuizTitle");
    if (titleElem) titleElem.textContent = comp.title;
    const subElem = document.getElementById("sLiveSubjectBadge");
    if (subElem) subElem.textContent = comp.subject;

    updateStudentScoreBadge();

    const qBadge = document.getElementById("sLiveQBadge");
    if (qBadge) qBadge.textContent = `Question ${qIdx + 1} of ${comp.totalQuestions}`;

    const qText = document.getElementById("sLiveQuestionText");
    if (qText) qText.textContent = q.question;

    renderAnswerOptions(q.options, -1, false);

    const feedback = document.getElementById("sAnswerFeedback");
    if (feedback) feedback.className = "student-feedback-box hidden";
}

function renderAnswerOptions(options, selectedIndex = -1, isSubmitted = false) {
    const opts = options || [];
    const optIds = ["sOptTextA", "sOptTextB", "sOptTextC", "sOptTextD"];
    optIds.forEach((id, idx) => {
        const elem = document.getElementById(id);
        if (elem) elem.textContent = opts[idx] || "";
    });

    document.querySelectorAll(".student-option-btn").forEach((btn, idx) => {
        btn.disabled = isSubmitted;
        btn.classList.remove("selected-option", "is-correct-answer", "is-wrong-answer");
        if (selectedIndex === idx) {
            btn.classList.add("selected-option");
        }
    });
}

function startStudentQuestionTimer() {
    clearInterval(liveTimerInterval);
    const timerElem = document.getElementById("sLiveTimer");

    // Every tick re-derives the time from the shared start timestamp, so a refresh resumes correctly.
    const tick = () => {
        const session = currentStudentLiveSession;
        if (!session || session.phase !== "question") {
            clearInterval(liveTimerInterval);
            return;
        }
        liveTimeRemaining = getLiveQuestionRemainingSeconds(session.state, liveClockOffsetMs);
        if (timerElem) timerElem.textContent = liveTimeRemaining;
        if (liveTimeRemaining <= 0) {
            clearInterval(liveTimerInterval);
            applyStudentAnswerState();
        }
    };

    tick();
    liveTimerInterval = setInterval(tick, 1000);
}

// Syncs the option buttons and feedback box with this student's answer for the current question.
function applyStudentAnswerState() {
    const session = currentStudentLiveSession;
    if (!session || session.phase !== "question") return;

    const qIdx = session.renderedQuestionIndex;
    const answer = session.answers[qIdx];
    const pending = session.pendingAnswer && session.pendingAnswer.questionIndex === qIdx ? session.pendingAnswer : null;
    const timeUp = getLiveQuestionRemainingSeconds(session.state, liveClockOffsetMs) <= 0;
    const buttons = document.querySelectorAll(".student-option-btn");
    const promptElem = document.getElementById("sLiveSelectPrompt");
    const selected = answer ? answer.selectedOption : (pending ? pending.selectedOption : -1);

    buttons.forEach((btn, idx) => {
        btn.disabled = !!(answer || pending || timeUp);
        btn.classList.remove("selected-option", "is-correct-answer", "is-wrong-answer");
        if (idx === selected) btn.classList.add("selected-option");
        if (answer && answer.graded) {
            if (idx === answer.correctOption) btn.classList.add("is-correct-answer");
            else if (idx === selected) btn.classList.add("is-wrong-answer");
        }
    });

    if (answer) {
        if (promptElem) promptElem.textContent = "Answer submitted — waiting for the host...";
        showStudentInstantFeedback(answer, qIdx);
    } else if (pending) {
        if (promptElem) promptElem.textContent = "Sending your answer...";
    } else if (timeUp) {
        if (promptElem) promptElem.textContent = "Time's up!";
        showStudentInstantFeedback(null, qIdx);
    } else {
        if (promptElem) promptElem.textContent = "Select one answer";
        const feedback = document.getElementById("sAnswerFeedback");
        if (feedback) feedback.className = "student-feedback-box hidden";
    }
}

// Students send only the option index; the host grades it against the answer key.
async function submitStudentLiveAnswer(optionIndex) {
    const session = currentStudentLiveSession;
    if (!session || session.phase !== "question") return;

    const qIdx = session.renderedQuestionIndex;
    if (session.answers[qIdx] || (session.pendingAnswer && session.pendingAnswer.questionIndex === qIdx)) return;
    if (getLiveQuestionRemainingSeconds(session.state, liveClockOffsetMs) <= 0) return;

    session.pendingAnswer = { questionIndex: qIdx, selectedOption: optionIndex };
    applyStudentAnswerState();

    console.log("[QUIZ DEBUG] Submitting answer:", { competition: session.code, participantId: session.studentId, questionIndex: qIdx, selectedOption: optionIndex });

    try {
        await liveCompetitionRef(session.code).collection("answers").doc(`${session.studentId}_${qIdx}`).set({
            participantId: session.studentId,
            studentName: session.studentName,
            competitionCode: session.code,
            questionIndex: qIdx,
            selectedOption: optionIndex,
            answeredAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (err) {
        if (currentStudentLiveSession !== session) return;
        session.pendingAnswer = null;
        const message = err.code === "permission-denied"
            ? "Your answer was not accepted — time was up or this question was already answered."
            : describeLiveError(err, "Submitting your answer").message;
        showToast(`⚠️ ${message}`);
        applyStudentAnswerState();
    }
}

function showStudentInstantFeedback(answer, qIdx) {
    const feedbackBox = document.getElementById("sAnswerFeedback");
    if (!feedbackBox) return;

    const session = currentStudentLiveSession;
    const question = session ? session.competition.questions[qIdx] : null;
    const correctOption = answer && answer.graded ? answer.correctOption : null;
    const correctLine = (question && correctOption !== null && correctOption !== undefined)
        ? `Correct answer: Option ${String.fromCharCode(65 + correctOption)} — "${escapeHtml(question.options[correctOption] || "")}"`
        : "";

    let icon, title, titleColor, detail, waiting;
    if (answer && answer.graded && answer.isCorrect) {
        icon = "🎉"; title = "Correct answer!"; titleColor = "#10b981";
        detail = `<span style="color: #10b981;">+${(answer.pointsEarned || 0).toLocaleString()} points</span>`;
        waiting = "Answer submitted. Waiting for the next question...";
    } else if (answer && answer.graded) {
        icon = "❌"; title = "Incorrect answer"; titleColor = "#ef4444";
        detail = `<span style="color: #f59e0b;">${correctLine}</span><br><span style="opacity: 0.8;">+0 points</span>`;
        waiting = "Answer submitted. Waiting for the next question...";
    } else if (answer) {
        icon = "🔒"; title = "Answer locked in!"; titleColor = "inherit";
        detail = "Checking your answer...";
        waiting = "Waiting for the host to reveal the result...";
    } else {
        icon = "⏱️"; title = "Time's Up! (Unanswered)"; titleColor = "#ef4444";
        detail = `<span style="opacity: 0.8;">+0 points</span>`;
        waiting = "Waiting for the host to move to the next question...";
    }

    feedbackBox.className = `student-feedback-box ${answer && answer.graded && answer.isCorrect ? "feedback-correct" : "feedback-incorrect"}`;
    feedbackBox.innerHTML = `
        <span class="feedback-icon" style="font-size: 1.8rem;">${icon}</span>
        <div class="feedback-text-wrap" style="text-align: left; flex: 1;">
            <div style="font-size: 1.2rem; font-weight: 800; color: ${titleColor};">${title}</div>
            <div style="font-size: 0.95rem; font-weight: 700; margin-top: 2px;">${detail}</div>
            <div style="font-size: 0.85rem; margin-top: 4px; opacity: 0.85;">${waiting}</div>
        </div>
    `;
}

/* --- Question result, leaderboard and final results --- */

function renderStudentQuestionResult() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const comp = session.state;
    const qIdx = comp.currentQuestionIndex || 0;
    const answer = session.answers[qIdx];
    const revealed = comp.revealedAnswers ? comp.revealedAnswers[qIdx] : undefined;
    const correctOption = (answer && answer.graded) ? answer.correctOption : revealed;
    const question = session.competition.questions[qIdx];

    const banner = document.getElementById("sResultBanner");
    const statusText = document.getElementById("sResultStatus");
    const pointsText = document.getElementById("sResultPoints");
    const iconElem = document.getElementById("sResultIcon");

    if (answer && answer.graded && answer.isCorrect) {
        banner.className = "s-result-banner banner-correct";
        iconElem.textContent = "🎉";
        statusText.textContent = "Correct!";
        pointsText.textContent = `+${(answer.pointsEarned || 0).toLocaleString()} Points`;
    } else {
        banner.className = "s-result-banner banner-wrong";
        iconElem.textContent = answer ? "❌" : "⏱️";
        statusText.textContent = answer ? (answer.graded ? "Incorrect!" : "Answer received") : "Time's Up!";
        const correctText = (question && typeof correctOption === "number")
            ? ` • Correct: ${String.fromCharCode(65 + correctOption)}. ${question.options[correctOption] || ""}`
            : "";
        pointsText.textContent = `+0 Points${correctText}`;
    }

    // Class response breakdown, from the tally the host published for this question.
    const summary = (comp.answersSummary && comp.answersSummary[qIdx]) || { 0: 0, 1: 0, 2: 0, 3: 0, total: 0 };
    const base = summary.total > 0 ? summary.total : 1;
    ["A", "B", "C", "D"].forEach((letter, idx) => {
        const valElem = document.getElementById(`sValBar${letter}`);
        if (valElem) valElem.textContent = summary[idx] || 0;
        const col = document.getElementById(`sColBar${letter}`);
        if (col) col.classList.toggle("is-correct-column", idx === correctOption);
    });

    setTimeout(() => {
        ["A", "B", "C", "D"].forEach((letter, idx) => {
            const pillar = document.getElementById(`sPillar${letter}`);
            if (pillar) pillar.style.height = `${Math.round(((summary[idx] || 0) / base) * 100)}%`;
        });
    }, 100);

    showStudentLiveScreen("studentResult");
}

function renderStudentLeaderboard() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const leaderboard = calculateSortedLeaderboard(session.participants);
    const myIdx = leaderboard.findIndex(p => p.id === session.studentId);
    const myScore = (session.me && session.me.score) || 0;

    document.getElementById("sMyLiveScore").textContent = `${myScore.toLocaleString()} pts`;
    document.getElementById("sMyLiveRank").textContent = `Rank ${myIdx >= 0 ? "#" + (myIdx + 1) : "-"}`;

    renderLeaderboardTable("sLeaderboardTableContainer", leaderboard, session.studentId);
    showStudentLiveScreen("studentLeaderboard");
}

function renderStudentFinalResults() {
    const session = currentStudentLiveSession;
    if (!session) return;

    const participants = calculateSortedLeaderboard(session.participants);
    const myIdx = participants.findIndex(p => p.id === session.studentId);
    const myRank = myIdx + 1;
    const me = myIdx >= 0 ? participants[myIdx] : (session.me || {});

    const totalQ = session.competition.totalQuestions || 1;
    const myScore = me.score || 0;
    const myCorrect = me.correctAnswers || 0;
    const myPct = totalQ > 0 ? Math.round((myCorrect / totalQ) * 100) : 0;

    const placeText = myRank === 1 ? "1st 🥇" : myRank === 2 ? "2nd 🥈" : myRank === 3 ? "3rd 🥉" : `#${myRank}`;
    document.getElementById("sMyFinalRankText").textContent = myRank > 0 ? `QUIZ COMPLETED — You placed ${placeText}!` : "QUIZ COMPLETED!";
    document.getElementById("sMyFinalScoreText").textContent = `Final Score: ${myScore.toLocaleString()} pts | Correct: ${myCorrect}/${totalQ} (${myPct}%)`;

    const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
    document.getElementById("sMyFinalMedal").textContent = medals[myRank] || "🎖️";

    const w1 = participants[0] || { studentName: "-", score: 0 };
    const w2 = participants[1] || { studentName: "-", score: 0 };
    const w3 = participants[2] || { studentName: "-", score: 0 };

    document.getElementById("sPodium1Name").textContent = w1.studentName || w1.name || "-";
    document.getElementById("sPodium1Score").textContent = `${(w1.score || 0).toLocaleString()} pts`;
    document.getElementById("sPodium2Name").textContent = w2.studentName || w2.name || "-";
    document.getElementById("sPodium2Score").textContent = `${(w2.score || 0).toLocaleString()} pts`;
    document.getElementById("sPodium3Name").textContent = w3.studentName || w3.name || "-";
    document.getElementById("sPodium3Score").textContent = `${(w3.score || 0).toLocaleString()} pts`;

    renderDetailedLeaderboardTable("sDetailedLeaderboardContainer", participants, session.studentId, totalQ);

    if (!session.celebrated) {
        session.celebrated = true;
        createConfetti();
    }
    showStudentLiveScreen("studentPodium");
}

/* =====================================================
   AUTO-INITIALIZE IF REFRESHED / RESUMED
===================================================== */

function checkAndHandleUrlJoin() {
    try {
        const savedTeacher = localStorage.getItem("skillquest_teacher");
        if (savedTeacher) {
            currentTeacher = JSON.parse(savedTeacher);
        }
    } catch (e) { }

    const urlCode = getJoinCodeFromUrl();
    const saved = loadStudentSession();

    // Refresh/reconnect: return to the same competition as the same participant.
    if (saved && (!urlCode || urlCode === saved.code)) {
        console.log("[QUIZ DEBUG] Restoring student session for", saved.code);
        const nameInput = document.getElementById("sJoinNameInput");
        if (nameInput) nameInput.value = saved.studentName;
        openStudentJoinPage(saved.code);
        showLoading("Reconnecting to your competition...");

        enterLiveCompetition(saved.code, saved.studentName, { restoring: true })
            .then(() => showToast("♻️ Reconnected to competition!"))
            .catch(err => {
                clearStudentSession();
                const errElem = document.getElementById("sJoinError");
                if (errElem) errElem.textContent = describeLiveError(err, "Reconnecting").message;
            })
            .finally(() => hideLoading());
        return;
    }

    if (urlCode) {
        console.log("[QUIZ DEBUG] Auto-opening join screen for URL code:", urlCode);
        openStudentJoinPage(urlCode);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkAndHandleUrlJoin);
} else {
    checkAndHandleUrlJoin();
}

/* =====================================================
   STAFF-CREATED QUIZ BUILDER SYSTEM
===================================================== */

let customQuestionsData = [];

function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openStaffQuizBuilder() {
    showTeacherPage("teacherCreate");
    switchCreateTab("custom");
    document.querySelectorAll(".teacher-navbar nav button").forEach(btn => btn.classList.remove("active"));
    const btn = document.getElementById("tNavCreateQuiz");
    if (btn) btn.classList.add("active");
}

function switchCreateTab(tabName) {
    const customPanel = document.getElementById("staffQuizBuilderPanel");
    const autoPanel = document.getElementById("autoQuizBuilderPanel");
    const tabBtnCustom = document.getElementById("tabBtnCustomQuiz");
    const tabBtnAuto = document.getElementById("tabBtnAutoQuiz");

    if (tabName === "custom") {
        if (customPanel) customPanel.classList.remove("hidden");
        if (autoPanel) autoPanel.classList.add("hidden");
        if (tabBtnCustom) tabBtnCustom.classList.add("active");
        if (tabBtnAuto) tabBtnAuto.classList.remove("active");

        const navCustom = document.getElementById("tNavCreateQuiz");
        const navAuto = document.getElementById("tNavCreate");
        if (navCustom) navCustom.classList.add("active");
        if (navAuto) navAuto.classList.remove("active");

        // Initialize with default slots if empty
        if (customQuestionsData.length === 0) {
            presetCustomQuestions(5);
        } else {
            renderCustomQuestions();
        }
    } else {
        if (customPanel) customPanel.classList.add("hidden");
        if (autoPanel) autoPanel.classList.remove("hidden");
        if (tabBtnCustom) tabBtnCustom.classList.remove("active");
        if (tabBtnAuto) tabBtnAuto.classList.add("active");

        const navCustom = document.getElementById("tNavCreateQuiz");
        const navAuto = document.getElementById("tNavCreate");
        if (navAuto) navAuto.classList.add("active");
        if (navCustom) navCustom.classList.remove("active");

        onSubjectConfigChange();
    }
}

function presetCustomQuestions(count) {
    syncCustomQuestionsFromDOM();
    for (let i = 0; i < count; i++) {
        const newId = Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
        customQuestionsData.push({
            id: newId,
            question: "",
            options: ["", "", "", ""],
            answer: null
        });
    }
    renderCustomQuestions();
    updateStaffQCountBadge();
    showToast(`⚡ Added ${count} question slots! Total: ${customQuestionsData.length}`);
}

function addCustomQuestion(initialData = null) {
    syncCustomQuestionsFromDOM();
    const newId = Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
    const newQ = initialData || {
        id: newId,
        question: "",
        options: ["", "", "", ""],
        answer: null
    };
    customQuestionsData.push(newQ);
    renderCustomQuestions();
    updateStaffQCountBadge();

    // Smooth scroll to the newly added question
    setTimeout(() => {
        const card = document.getElementById(`q_card_${newQ.id}`);
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            const textarea = card.querySelector(".custom-q-textarea");
            if (textarea) textarea.focus();
        }
    }, 80);
}

function deleteCustomQuestion(id) {
    const idx = customQuestionsData.findIndex(q => q.id === id);
    if (idx !== -1) {
        syncCustomQuestionsFromDOM();
        customQuestionsData.splice(idx, 1);
        renderCustomQuestions();
        updateStaffQCountBadge();
        showToast("🗑️ Question removed");
    }
}

function syncCustomQuestionsFromDOM() {
    customQuestionsData.forEach(q => {
        const card = document.getElementById(`q_card_${q.id}`);
        if (!card) return;
        const textarea = card.querySelector(".custom-q-textarea");
        if (textarea) q.question = textarea.value;

        for (let i = 0; i < 4; i++) {
            const optInput = document.getElementById(`opt_text_${q.id}_${i}`);
            if (optInput) q.options[i] = optInput.value;
            const radio = document.getElementById(`opt_radio_${q.id}_${i}`);
            if (radio && radio.checked) q.answer = i;
        }
    });
}

function onCorrectAnswerChange(id, optIdx) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) {
        q.answer = optIdx;
    }
    for (let i = 0; i < 4; i++) {
        const row = document.getElementById(`opt_row_${id}_${i}`);
        if (row) {
            if (i === optIdx) {
                row.classList.add("is-correct-selected");
                let badge = row.querySelector(".correct-indicator-tag");
                if (!badge) {
                    badge = document.createElement("span");
                    badge.className = "correct-indicator-tag";
                    badge.textContent = "✓ Correct Answer";
                    row.appendChild(badge);
                }
            } else {
                row.classList.remove("is-correct-selected");
                const badge = row.querySelector(".correct-indicator-tag");
                if (badge) badge.remove();
            }
        }
    }
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function onCustomQuestionTextInput(id, val) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) q.question = val;
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function onCustomOptInput(id, optIdx, val) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) {
        if (!q.options) q.options = ["", "", "", ""];
        q.options[optIdx] = val;
    }
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function updateStaffQCountBadge() {
    const badge = document.getElementById("staffQCountBadge");
    if (badge) {
        badge.textContent = customQuestionsData.length;
    }
}

function renderCustomQuestions() {
    const container = document.getElementById("staffQuestionsList");
    if (!container) return;

    if (customQuestionsData.length === 0) {
        container.innerHTML = `
            <div class="empty-questions-notice">
                <p>No questions created yet. Click "+ Add Question" or pick a quick slot preset above!</p>
                <button type="button" class="primary-btn teacher-primary-btn" onclick="addCustomQuestion()">
                    ➕ Add First Question
                </button>
            </div>
        `;
        updateStaffQCountBadge();
        return;
    }

    const letters = ["A", "B", "C", "D"];
    let html = "";

    customQuestionsData.forEach((q, idx) => {
        let optionsHtml = "";
        for (let optIdx = 0; optIdx < 4; optIdx++) {
            const isCorrect = q.answer === optIdx;
            const optVal = (q.options && q.options[optIdx]) ? escapeHtml(q.options[optIdx]) : "";
            optionsHtml += `
                <div class="custom-opt-row ${isCorrect ? 'is-correct-selected' : ''}" id="opt_row_${q.id}_${optIdx}">
                    <input type="radio" 
                           class="custom-opt-radio" 
                           name="correct_radio_${q.id}" 
                           id="opt_radio_${q.id}_${optIdx}" 
                           value="${optIdx}" 
                           ${isCorrect ? 'checked' : ''} 
                           onchange="onCorrectAnswerChange('${q.id}', ${optIdx})"
                           title="Mark Option ${letters[optIdx]} as correct answer">
                    <span class="opt-letter-tag">${letters[optIdx]}</span>
                    <input type="text" 
                           id="opt_text_${q.id}_${optIdx}" 
                           class="custom-opt-input" 
                           placeholder="Option ${letters[optIdx]} text..." 
                           value="${optVal}"
                           oninput="onCustomOptInput('${q.id}', ${optIdx}, this.value)">
                    ${isCorrect ? '<span class="correct-indicator-tag">✓ Correct Answer</span>' : ''}
                </div>
            `;
        }

        html += `
            <div class="custom-q-card" id="q_card_${q.id}">
                <div class="custom-q-card-header">
                    <div class="q-badge-num">
                        <span>Question #${idx + 1}</span>
                    </div>
                    <button type="button" class="btn-delete-q" onclick="deleteCustomQuestion('${q.id}')" title="Delete this question">
                        🗑️ Delete
                    </button>
                </div>

                <textarea class="custom-q-textarea" 
                          id="q_text_${q.id}" 
                          placeholder="Enter question text (e.g. Which algorithm has O(n log n) average time complexity?)..."
                          oninput="onCustomQuestionTextInput('${q.id}', this.value)">${escapeHtml(q.question || "")}</textarea>

                <div class="options-heading-helper">
                    <span>Options (Select one radio button for the correct answer):</span>
                    <span style="font-size: 0.8rem; color: #10b981; font-weight: 700;">● Exactly 1 Correct Answer</span>
                </div>

                <div class="custom-options-grid">
                    ${optionsHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    updateStaffQCountBadge();
}

function validateCustomQuiz() {
    syncCustomQuestionsFromDOM();

    // 1. Validate Quiz Title
    const titleInput = document.getElementById("staffQuizTitle");
    const title = titleInput ? titleInput.value.trim() : "";
    if (!title) {
        showToast("⚠️ Please enter a Quiz Title before publishing!");
        if (titleInput) {
            titleInput.focus();
            titleInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return false;
    }

    // 2. Validate Question Count
    if (customQuestionsData.length === 0) {
        showToast("⚠️ Your quiz must have at least 1 question. Click '+ Add Question'!");
        return false;
    }

    // 3. Clear previous highlights
    document.querySelectorAll(".custom-q-card").forEach(c => c.classList.remove("validation-error"));

    const letters = ["A", "B", "C", "D"];

    // 4. Validate each question
    for (let i = 0; i < customQuestionsData.length; i++) {
        const q = customQuestionsData[i];
        const card = document.getElementById(`q_card_${q.id}`);

        // A. Validate Question Text
        if (!q.question || !q.question.trim()) {
            showToast(`⚠️ Question #${i + 1} is missing question text!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                const ta = card.querySelector(".custom-q-textarea");
                if (ta) ta.focus();
            }
            return false;
        }

        // B. Validate Exactly 4 Options
        if (!q.options || q.options.length !== 4) {
            showToast(`⚠️ Question #${i + 1} must have 4 options!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return false;
        }

        for (let optIdx = 0; optIdx < 4; optIdx++) {
            const optText = q.options[optIdx] ? q.options[optIdx].trim() : "";
            if (!optText) {
                showToast(`⚠️ Question #${i + 1}: Option ${letters[optIdx]} cannot be empty!`);
                if (card) {
                    card.classList.add("validation-error");
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    const optInp = document.getElementById(`opt_text_${q.id}_${optIdx}`);
                    if (optInp) optInp.focus();
                }
                return false;
            }
        }

        // C. Validate 1 Correct Answer Selection
        if (q.answer === null || q.answer === undefined || q.answer < 0 || q.answer > 3) {
            showToast(`⚠️ Question #${i + 1}: Please select which option (A, B, C, or D) is the correct answer!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return false;
        }
    }

    return true;
}

async function publishStaffCreatedQuiz() {
    if (!validateCustomQuiz()) {
        return;
    }

    syncCustomQuestionsFromDOM();

    const title = (document.getElementById("staffQuizTitle").value || "Staff Quiz").trim();
    const subject = (document.getElementById("staffQuizSubject").value || "Staff Quiz").trim();
    const duration = parseInt(document.getElementById("staffQuizDuration").value, 10) || 60;

    // Standardize questions format: { question, options: [A, B, C, D], answer: 0..3 }
    const formattedQuestions = customQuestionsData.map(q => ({
        question: q.question.trim(),
        options: q.options.map(opt => opt.trim()),
        answer: parseInt(q.answer, 10)
    }));

    // Sanitize for Firestore — removes undefined/null values that Firestore rejects
    const sanitizedQuestions = sanitizeQuestionsForFirestore(formattedQuestions);

    await hostNewLiveCompetition({
        title: title,
        subject: subject,
        competitionType: "custom",
        questions: sanitizedQuestions,
        questionDuration: duration,
        isStaffCreated: true
    });
}

async function saveCustomQuizDraft() {
    syncCustomQuestionsFromDOM();
    const title = (document.getElementById("staffQuizTitle").value || "Untitled Quiz").trim();
    const subject = (document.getElementById("staffQuizSubject").value || "Staff Quiz").trim();
    const duration = parseInt(document.getElementById("staffQuizDuration").value, 10) || 60;

    const draft = {
        title: title,
        subject: subject,
        questions: customQuestionsData,
        duration: duration,
        savedAt: new Date().toISOString()
    };

    localStorage.setItem("skillquest_staff_quiz_draft", JSON.stringify(draft));

    if (typeof db !== "undefined" && currentTeacher) {
        try {
            await db.collection("staffQuizzes").add({
                title: title,
                subject: subject,
                teacherId: currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01",
                teacherName: currentTeacher.name || "Professor",
                questions: customQuestionsData,
                duration: duration,
                isDraft: true,
                createdAt: typeof firebase !== "undefined" && firebase.firestore
                    ? firebase.firestore.FieldValue.serverTimestamp()
                    : new Date().toISOString()
            });
        } catch (e) {
            console.warn("Draft save notice:", e);
        }
    }

    showToast("💾 Quiz draft saved successfully!");
}

