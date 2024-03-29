import { useContext, useEffect, useRef, useState } from "react";
import { ArrowLeftCircle, ArrowLeftCircleFill, ArrowRightCircle, ArrowRightCircleFill } from "react-bootstrap-icons";
import nextId from "react-id-generator";
import { StoreContext } from "../../App";
import avatarData from "../../data/avatars/avatarDataOld";
import daysPerMonth from "../../helpers/format/daysPerMonth";
import getYear from "../../helpers/format/getYear";
import random from "../../helpers/functions/random";
import useHover from "../../hooks/useHover";
import useKeybind from "../../hooks/useKeybind";
import "./styles.css";

export default function CreateUserPage() {
  const { setRoute, setUserData, user } = useContext(StoreContext);

  const formRef = useRef<HTMLFormElement>(null);

  const [section, setSection] = useState(0);

  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState<number>();
  const [year, setYear] = useState("");

  const rightArrowElement = useHover(<ArrowRightCircle size={24} />, <ArrowRightCircleFill size={24} color="white" />);
  const leftArrowElement = useHover(<ArrowLeftCircle size={24} />, <ArrowLeftCircleFill size={24} color="white" />);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
    setSection((prev) => prev + 1);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(Number(e.target.value));
    setSection((prev) => prev + 1);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setSection((prev) => prev + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setSection((prev) => prev + 1);
      if (e.key === "ArrowLeft") setSection((prev) => prev - 1);
      if (e.key === "Enter") e.preventDefault();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const [shake, setShake] = useState(false); // Animate the input field if the user tries to submit without entering field

  useEffect(() => {
    if (shake) {
      const timeout = setTimeout(() => setShake(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [shake]);

  const handleNextSection = () => {
    setSection((prev) => {
      if (prev === 0 && name) return prev + 1;
      if (prev === 1 && month) return prev + 1;
      if (prev === 2 && day) return prev + 1;
      if (prev === 3 && year) return prev + 1;

      setShake(true);
      return prev;
    });
  };

  // User creation
  useEffect(() => {
    if (formRef.current === null) return;
    if (section < 0) setSection(0);

    // If this was a real world app I would use a backend to store the data and not just the browser's local storage
    if (section === formRef.current.children.length) {
      const avatarCategory = avatarData[random(0, avatarData.length - 1)];
      const avatar = avatarCategory.avatars[random(0, avatarCategory.avatars.length - 1)];
      const avatarDefault = "/netflix-redesign/profile.png";

      setUserData((prev: any) => [
        ...prev,
        {
          id: nextId(),
          name,
          icon: avatarDefault,
          recentlyWatched: [],
          birthday: { month, day, year },
          habits: { actors: {}, genres: {}, directors: {} },
        },
      ]);

      // if (user) setRoute("manage-profile");
      setRoute("");
    }

    // Unfocus input
    if (inputRef.current && section !== 0) inputRef.current.blur();
  }, [section, formRef, inputRef.current]);

  // If you are on the first section and you press enter, it will go to the next section
  useKeybind("Enter", () => {
    if (section === 0) setSection((prev) => prev + 1);
  });

  return (
    <div className="create-user-page">
      <h1>Create a profile</h1>
      <div className="create-user__wrapper">
        <div className="create-user__btn-wrapper">
          <button className="btn-unstyled" onClick={() => setSection((prev) => prev - 1)}>
            {leftArrowElement}
          </button>
          <form ref={formRef} className={shake ? "shake-effect" : ""}>
            <input
              ref={inputRef}
              className={`input create-user__section ${
                section === 0 ? "create-user__next" : section === 1 ? "create-user__prev" : "create-user__none"
              }`}
              placeholder="Nickname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select
              className={`create-user__section ${section === 1 ? "create-user__next" : section === 2 ? "create-user__prev" : "create-user__none"}`}
              value={month}
              onChange={handleMonthChange}
            >
              <option value="month">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <select
              className={`create-user__section ${section === 2 ? "create-user__next" : section === 3 ? "create-user__prev" : "create-user__none"}`}
              value={day}
              onChange={handleDayChange}
            >
              <option value={day}>Day</option>
              {daysPerMonth(parseInt(month) - 1).map((day: number) => {
                return (
                  <option key={nextId()} value={day}>
                    {day}
                  </option>
                );
              })}
            </select>

            <select
              className={`create-user__section ${section === 3 ? "create-user__next" : section === 4 ? "create-user__prev" : "create-user__none"}`}
              value={year}
              onChange={handleYearChange}
            >
              <option value={year}>Year</option>

              {Array.from({ length: 120 }, (_, i) => getYear(day!, parseInt(month) - 1) - i).map((year: number) => {
                return (
                  <option key={nextId()} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            {/* {section === 4 ? <AvatarPage /> : null} */}
          </form>
          <button className="btn-unstyled" onClick={handleNextSection}>
            {rightArrowElement}
          </button>
        </div>
      </div>
    </div>
  );
}
