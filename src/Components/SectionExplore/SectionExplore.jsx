import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextFlight } from "../../Constants";
import { Form, Field } from "react-final-form";
import uk from "date-fns/locale/uk";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import "./style.css";

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};



const SectionExplore = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="explore">
      <div className="explore__container">
        <h2 className="explore__title">{TextFlight.explore.title}</h2>
        <h1 className="explore__text">{TextFlight.explore.text}</h1>
        <div className="explore__search">
          <Form
            initialValues={{ employed: false }}
            onSubmit={onSubmit}
            render={() => (
              <form className="explore__form">
                <div className="explore__form-top">
                  <label className="explore__form-text">
                    Пошук авіаквитків
                  </label>
                  <div className="explore__form-check">
                    <label>
                      <Field
                        className="radio"
                        name="explore"
                        component="input"
                        type="radio"
                        value="Return"
                      />
                      Туди і назад
                    </label>

                    <label>
                      <Field
                        className="radio"
                        name="explore"
                        component="input"
                        type="radio"
                        value="One-way"
                      />
                      В один бік
                    </label>
                  </div>
                </div>

                <div className="explore__form-input">
                  <Field
                    className="departure"
                    name="firstField"
                    component="input"
                    type="text"
                    placeholder="Відправлення"
                    id="departure"
                  />
                  <label for="departure">Відправлення</label>

                  <Field
                    className="arrival"
                    name="SecondField"
                    component="input"
                    type="text"
                    placeholder="Прибуття"
                    id="arrival"
                  />
                  <label for="arrival">Прибуття</label>
                  <label for="date">Дата</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showIcon
                    scrollableYearDropdown
                    yearDropdownItemNumber={40}
                    placeholderText="Дата"
                    locale={uk}
                    id="date"
                  />

                  <Button buttonText="Пошук авіаквитків" />
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionExplore;
