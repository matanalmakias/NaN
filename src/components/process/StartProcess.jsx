import React from "react";
import { Form } from "react-bootstrap";
import { categoryList } from "../../utils/content";
import "./style.scss";
const StartProcess = () => {
  return (
    <div>
      <Form className="bg1">
        <div className="row">
          <div className="col row">
            <label htmlFor="name" className="label1 col">
              שם
            </label>
            <input type="text" required placeholder="שם פרטי" />
          </div>
          <div className="col row">
            <label htmlFor="city" className="label1 col">
              עיר
            </label>
            <input type="text" required placeholder="עיר" />
          </div>
          <div className="col row">
            <label htmlFor="phone" className="label1 col">
              פלאפון
            </label>
            <input type="tel" required placeholder="פלאפון" />
          </div>
        </div>
        <div className="row">
          <div className="col row">
            <label htmlFor="category" className="label1 col">
              קטגוריה
            </label>
            <select className="form-control">
              <option disabled selected>
                בחר קטגוריה
              </option>
              {categoryList?.map((item, index) => (
                <option key={item._id}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col row">
            <label htmlFor="preferredPrices" className="label1 col">
              כמות בעלי מקצוע
            </label>
            <input
              type="tel"
              required
              placeholder="כמה הצעות מחיר שונות תרצה?"
            />
          </div>
          <div className="col row">
            <label htmlFor="date" className="label1 col">
              תאריך ביצוע מועדף
            </label>
            <input type="date" required placeholder="תאריך ביצוע מועדף" />
          </div>
        </div>
        <div className="row">
          <div className="col row">
            <label htmlFor="budget" className="label1 ">
              תקציב
            </label>
            <input type="tel" required placeholder="מה התקציב שלך?" />
          </div>
          <div className="col row">
            <label htmlFor="name" className="label1 col">
              פירוט הפנייה
            </label>
            <textarea
              className="form-control"
              required
              placeholder="הודעת הפנייה [פרט כמה שתוכל]"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default StartProcess;
