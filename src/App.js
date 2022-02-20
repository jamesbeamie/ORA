import React, { useState } from "react";
import ebike from "./ebike.png";
import "./App.css";

const App = () => {
  const [bookingsArr, setBookingsArr] = useState([]);
  const [elementsArr, setElementssArr] = useState([]);
  const [bookingAvailability, setBookingAvailability] = useState({});
  const [highestAverage, setHighestAverage] = useState({});

  const getBookings = () => {
    console.log("imefika");
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookings: bookingsArr,
      }),
      // body: JSON.stringify({ title: "React POST Request Example444" }),
    };
    console.log(bookingsArr);
    fetch("/bookings", reqOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data.success", data.success);
        setBookingAvailability(data);
      }); //setBookingAvailability(data)
  };
  const getHieghestAverage = () => {
    console.log("imefika");
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        elements: elementsArr,
      }),
      // body: JSON.stringify({ title: "React POST Request Example444" }),
    };
    // console.log(bookingsArr);
    fetch("/highest-average", reqOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data.success", data.result);
        setHighestAverage(data);
      }); //setBookingAvailability(data)
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "800px",
          backgroundImage: `url(${ebike})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 12,
            marginLeft: 40,
          }}
        >
          <p style={{ color: "orange", fontSize: 32, fontWeight: "bold" }}>
            Opibus
          </p>
          <p
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: "lighter",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 5,
            }}
          >
            Coding challenge
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          backgroundColor: "rgb(240,240,240)",
          height: "800px",
        }}
      >
        <div
          style={{
            border: "1px solid rgb(210,210,210)",
            borderRadius: 8,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 40,
            padding: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p>Question 1:</p>
            <p
              style={{
                maxWidth: "85%",
                color: "gray",
                fontWeight: "lighter",
              }}
            >
              Given an array containing the rate of discharge of an electric
              vehicle, which 2 contiguous rate of discharge elements in the
              array will have the highest average. Create a function that will
              accept the array as a parameter and return the highest average
              between 2 contiguous elements. Assume the values of the array will
              always be positive
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "60%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Sample Input array
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "lighter",
                    marginLeft: 15,
                  }}
                >
                  [2, 3, 4, 1, 5]
                </p>
              </div>
              <input
                style={{
                  border: "2px solid rgb(210, 210,210)",
                  borderRadius: 8,
                  height: 36,
                  paddingLeft: 15,
                  paddingRight: 10,
                  backgroundColor: "rgb(240, 240,240)",
                  width: "100%",
                }}
                placeholder='paste in an array'
                onChange={(e) => setElementssArr(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "auto" }}>
              <button
                style={{
                  borderRadius: 8,
                  borderColor: "orange",
                  padding: 10,
                }}
                onClick={getHieghestAverage}
              >
                Check the Array
              </button>
            </div>
          </div>
          {/* divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>Highest average between 2 contiguous elements</p>
            <span
              style={{
                backgroundColor: "orange",
                color: "white",
                borderRadius: 55,
                border: "1px solid gray",
                height: 24,
                marginTop: "auto",
                marginBottom: "auto",
                padding: 6,
                marginRight: 40,
              }}
            >
              {highestAverage.result}
            </span>
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgb(210,210,210)",
            borderRadius: 8,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 40,
            padding: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p>Question 2:</p>
            <p
              style={{
                maxWidth: "85%",
                color: "gray",
                fontWeight: "lighter",
              }}
            >
              Given an array of intervals represents "N" bookings, find out if a
              particular bike will be available for all the booking?. Create a
              function that accepts an array of bookings and returns a boolean
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "60%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <p style={{ color: "black", fontWeight: "bolder" }}>
                  Sample Bookings array
                </p>
                <p
                  style={{
                    color: "gray",
                    fontWeight: "lighter",
                    marginLeft: 15,
                  }}
                >
                  [[1,4], [2,5], [7,9]]
                </p>
              </div>
              <input
                style={{
                  border: "2px solid rgb(210, 210,210)",
                  borderRadius: 8,
                  height: 36,
                  paddingLeft: 15,
                  paddingRight: 10,
                  backgroundColor: "rgb(240, 240,240)",
                  width: "100%",
                }}
                placeholder='paste in an array'
                value={bookingsArr}
                onChange={(e) => setBookingsArr(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "auto" }}>
              <button
                style={{
                  borderRadius: 8,
                  borderColor: "orange",
                  padding: 10,
                }}
                // onClick={(e) => console.log("imepigwa", bookingsArr)}
                onClick={getBookings}
              >
                Check availability
              </button>
            </div>
          </div>
          {/* divider */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>Bike is available for all bookings</p>
            {/* <p style={{ color: "red" }}>{bookingAvailability.success}</p> */}
            <>
              {bookingAvailability.success === true ? (
                <span
                  style={{
                    backgroundColor: "#1ECA5C",
                    color: "white",
                    marginTop: "auto",
                    marginBottom: "auto",
                    paddingLeft: 46,
                    paddingRight: 46,
                    height: 26,
                    borderRadius: 4,
                    // marginRight: 10,
                  }}
                >
                  True
                </span>
              ) : (
                <span
                  style={{
                    backgroundColor: "#FFC300",
                    color: "white",
                    marginTop: "auto",
                    marginBottom: "auto",
                    paddingLeft: 46,
                    paddingRight: 46,
                    height: 26,
                    borderRadius: 4,
                    // marginRight: 10,
                  }}
                >
                  False
                </span>
                // <p style={{ color: "#FFC300" }}>false</p>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
