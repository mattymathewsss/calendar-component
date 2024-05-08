import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CalendarWrapper, Controls, DatePicker } from './styles'
import { yearMonthDate } from '../../utils/calendarUtils';

type Props = {
  onSelect: (selectedDate: string) => void;
}

const Datepicker = ({ onSelect }: Props) => {

  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedFullDate, setSelectedFullDate] = useState('')
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [year, setYear] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [visibleElement, setVisibleElement] = useState('date')//date, month, year

  const months = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 1 },
    { month: "Mar", value: 2 },
    { month: "Apr", value: 3 },
    { month: "May", value: 4 },
    { month: "Jun", value: 5 },
    { month: "Jul", value: 6 },
    { month: "Aug", value: 7 },
    { month: "Sep", value: 8 },
    { month: "Oct", value: 9 },
    { month: "Nov", value: 10 },
    { month: "Dec", value: 11 }
  ];

  const daysOfWeek = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
  ];

  useEffect(() => {
    setSelectedDate(new Date())
    setMonth(selectedDate?.getMonth() || 0)
    setYear(selectedDate?.getFullYear() || 0)
  }, [datePickerOpen])


  const lastOfPrevMonth = (year: number, month: number) => {
    return new Date(year, month, 0);
  }

  const lastOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstOfNextMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 1)
  }

  const handleNextMonth = () => {
    if (month === 11) setYear(year + 1)

    setMonth((month + 1) % 12)

    console.log(month);
  }


  const handlePrevMonth = () => {
    if (month === 0) setYear(year - 1)

    setMonth((month - 1 + 12) % 12)

    console.log(month);
  }

  useEffect(() => {
    const currentMonth = months.find((value) => value.value === month);

    setSelectedMonth(currentMonth?.month as string)

  }, [handleNextMonth])

  const numDays = lastOfMonth(year, month);
  const numDays2 = lastOfPrevMonth(year, month).getDay() + 1;
  const numDays3 = firstOfNextMonth(year, month);

  const isToday = (day: any) => {
    if (selectedDate?.getDate() === day && selectedDate?.getFullYear() === year && selectedDate.getMonth() === month) {
      return true
    } else {
      return false
    }
  }


  return (
    <CalendarWrapper>
      <label>Date</label>
      <input
        value={selectedFullDate}
        onClick={() => {
          setDatePickerOpen(prevState => !prevState)
          setVisibleElement('date')
        }}
        placeholder='Select Date' type='text' />

      {
        datePickerOpen && <DatePicker
          onClick={() => {
            // setDatePickerOpen(false)
          }}>
          <Controls>
            <button
              onClick={() => handlePrevMonth()}
              className='arrow'>
              <MdArrowBackIos />
            </button>
            <button onClick={() => {
              setVisibleElement('month')
            }}>{selectedMonth}{' '}{year}</button>
            <button
              onClick={() => handleNextMonth()}
              className='arrow'>
              <MdArrowForwardIos />
            </button>
          </Controls>
          {
            visibleElement === 'date' && <div className="days-container">
              {
                daysOfWeek.map((days) => (
                  <span>{days}</span>
                ))
              }
            </div>
          }

          {
            visibleElement === 'date' && <div className="dates-container">
              {
                Array(numDays2).fill(null).map((_, index) => {
                  const day = index;
                  return (
                    <button
                      key={day}
                      className="disabled"
                      disabled
                    >
                      {lastOfPrevMonth(year, month).getDate() - lastOfPrevMonth(year, month).getDay() + index}
                    </button>
                  );
                })
              }
              {
                Array(numDays).fill(null).map((_, index) => {
                  const day = index + 1;
                  return (
                    <button
                      key={day}
                      className={`${isToday(day) ? "is-today" : ''} ${selectedDay === day ? "is-selected" : ''}`}
                      onClick={() => {
                        const date = new Date(year, month, day);
                        setSelectedDay(day)
                        setSelectedFullDate(yearMonthDate(date))
                        setDatePickerOpen(false);
                        onSelect(yearMonthDate(date))
                        console.log(day);
                        console.log(selectedFullDate);
                      }}
                      disabled={false}
                    >
                      {day}
                    </button>
                  );
                })
              }
              {
                Array(numDays3).slice(0, 7).map((_, index) => {
                  const day = index + 1;
                  return (
                    <button
                      key={day}
                      className="disabled"
                      disabled
                    >
                      {day}
                    </button>
                  );
                })
              }

            </div>
          }

          {
            visibleElement === 'month' && <div className="month-container">
              {
                months?.map((month) => (
                  <button
                    key={month.value}
                    onClick={() => {
                      setVisibleElement('date')
                    }}>{month.month}</button>
                ))
              }

            </div>
          }

        </DatePicker>
      }
    </CalendarWrapper>

  )
}

export default Datepicker