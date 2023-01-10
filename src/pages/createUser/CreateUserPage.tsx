import { useContext, useState } from "react";
import nextId from "react-id-generator";
import { UserDataContext } from "../../App";
import daysPerMonth from "../../helpers/daysPerMonth";
import getYear from "../../helpers/getYear";

export default function CreateUserPage() {
  const setUserData = useContext(UserDataContext);

  const [section, setSection] = useState(0);

  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState<number>();
  const [year, setYear] = useState("");

  return (
    <div>
      <h1>Create a profile</h1>
      <button onClick={() => setSection((prev) => prev - 1)}>Prev</button>
      <form>
        {section === 0 ? (
          <input placeholder="Nickname" value={name} onChange={(e) => setName(e.target.value)} />
        ) : section === 1 ? (
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
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
        ) : section === 2 ? (
          <select>
            <option value={day}>Day</option>
            {daysPerMonth(parseInt(month) - 1).map((day: number) => {
              return (
                <option key={nextId()} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        ) : section === 3 ? (
          <select>
            <option value={year}>Year</option>

            {Array.from({ length: 120 }, (_, i) => getYear(day!, parseInt(month) - 1) - i).map((year: number) => {
              return (
                <option key={nextId()} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        ) : null}
      </form>
      <button onClick={() => setSection((prev) => prev + 1)}>Next</button>
    </div>
  );
}
