import "../styles/about.module.css";
import Image from "next/image";
import Button from "../components/Button";

export default function About() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="about-section">
        <h1 className="text-center">درباره ما</h1>
        <p className="text-center mt-2">
          در اینجا می توانید بیشتر با ما آشنا شوید.
        </p>
      </div>
      <h2
        style={{ textAlign: "center", marginBottom: "10px",marginTop:'100px' }}
        className="text-center mt-4"
      >
        تیم ما
      </h2>
      <div
        style={{
          textAlign: "center",
          display: 'flex',
          clear: "both",
        }}
        className="row"
      >
        <div
          style={{
            margin: "5px 0",
            float: "left",
            width: "50%",
            padding: "10px",
            height: "300px",
            flex: '50%'
          }}
          className="column"
        >
          <div className="card">
            <Image
              width={100}
              height={100}
              src="https://cdn-icons-png.flaticon.com/128/10131/10131895.png"
              alt="Rabbit"
              className="m-auto"
            />
            <div className="container">
              <h2 className="m-1">کارمند ۱</h2>
              <p className="title m-1">سئوکار</p>
              <p className="m-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              </p>
              <p>employee1@example.com</p>
              <p className="mt-2">
                <button
                  style={{
                    backgroundColor: "#03a35b",
                    border: "0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "12px",
                    fontSize: "18px",
                    
                  }}
                >
                  تماس
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            margin: "5px 0",
            float: "left",
            width: "50%",
            padding: "10px",
            height: "300px",
            flex: '50%'

          }}
          className="column"
        >
          <div className="card">
            <Image
              width={100}
              height={100}
              src="https://cdn-icons-png.flaticon.com/128/6989/6989071.png"
              alt="Pig"
              className="m-auto"
            />
            <div className="container">
              <h2 className="m-1">کارمند ۲</h2>
              <p className="title m-1">برنامه نویس</p>
              <p className="m-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              </p>
              <p>employee2@example.com</p>
              <p className="mt-2">
                <button
                  style={{
                    backgroundColor: "#03a35b",
                    border: "0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "12px",
                    fontSize: "18px",
                  }}
                >
                  تماس
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            margin: "5px 0",
            float: "left",
            width: "50%",
            padding: "10px",
            height: "300px",
            flex: '50%'

          }}
          className="column"
        >
          <div className="card">
            <Image
              width={100}
              height={100}
              src="https://cdn-icons-png.flaticon.com/128/523/523444.png"
              alt="Bear"
              className="m-auto"
            />
            <div className="container">
              <h2 className="m-1">کارمند ۳</h2>
              <p className="title m-1">طراح</p>
              <p className="m-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              </p>
              <p>employee3@example.com</p>
              <p className="mt-2">
                <button
                  style={{
                    backgroundColor: "#03a35b",
                    border: "0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "12px",
                    fontSize: "18px",
                  }}
                >
                  تماس
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
