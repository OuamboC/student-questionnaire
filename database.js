const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE questionnaires (
            questionnaire_id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            creation_date INTEGER
            )`, (err) => {
                if (err) {
                    console.log('QUESTIONNAIRES table already created');
                } else {
                    console.log('QUESTIONNAIRES table created');
                }
            }
        );

        db.run(`CREATE TABLE questions (
            question_id INTEGER PRIMARY KEY AUTOINCREMENT,
            questionnaire_id INTEGER,
            question_text TEXT,
            question_type TEXT,
            FOREIGN KEY(questionnaire_id) REFERENCES questionnaires(questionnaire_id)
            )`, (err) => {
                if (err) {
                    console.log('QUESTIONS table already created');
                } else {
                    console.log('QUESTIONS table created');
                }
            }
        );

        db.run(`CREATE TABLE answers (
            answer_id INTEGER PRIMARY KEY AUTOINCREMENT,
            question_id INTEGER,
            answer_text TEXT,
            FOREIGN KEY(question_id) REFERENCES questions(question_id)
            )`, (err) => {
                if (err) {
                    console.log('ANSWERS table already created');
                } else {
                    console.log('ANSWERS table created');
                }
            }
        );

        db.run(`CREATE TABLE questionnaire_submissions (
            submission_id INTEGER PRIMARY KEY AUTOINCREMENT,
            questionnaire_id INTEGER,
            submission_date INTEGER,
            FOREIGN KEY(questionnaire_id) REFERENCES questionnaires(questionnaire_id)
            )`, (err) => {
                if (err) {
                    console.log('QUESTIONNAIRE_SUBMISSIONS table already created');
                } else {
                    console.log('QUESTIONNAIRE_SUBMISSIONS table created');
                }
            }
        );
    }
});

module.exports = db;
