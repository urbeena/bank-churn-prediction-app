import { useState } from "react"
import axios from "axios"

function App() {

  const [formData, setFormData] = useState({
    CreditScore: "",
    Geography: "",
    Gender: "",
    Age: "",
    Tenure: "",
    Balance: "",
    NumOfProducts: "",
    HasCrCard: "",
    IsActiveMember: "",
    EstimatedSalary: ""
  })

  const [result, setResult] = useState("")

  const handleSubmit = async () => {

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      {
        CreditScore: Number(formData.CreditScore),
        Geography: formData.Geography,
        Gender: formData.Gender,
        Age: Number(formData.Age),
        Tenure: Number(formData.Tenure),
        Balance: Number(formData.Balance),
        NumOfProducts: Number(formData.NumOfProducts),
        HasCrCard: Number(formData.HasCrCard),
        IsActiveMember: Number(formData.IsActiveMember),
        EstimatedSalary: Number(formData.EstimatedSalary)
      }
    )

    setResult(response.data.churn_prediction)

  }

  catch (error) {

    console.log(error)
    setResult("Error while predicting")
  }
}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "40px"
      }}
    >

      <h1>Bank Churn Prediction</h1>

      {/* Credit Score */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Credit Score:
        </label>

        <input
          type="number"
          placeholder="Credit Score"
          value={formData.CreditScore}
          onChange={(e) =>
            setFormData({
              ...formData,
              CreditScore: e.target.value
            })
          }
        />
      </div>

      {/* Geography */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Geography:
        </label>

        <select
          value={formData.Geography}
          onChange={(e) =>
            setFormData({
              ...formData,
              Geography: e.target.value
            })
          }
        >
          <option value="">Select Geography</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
        </select>
      </div>

      {/* Gender */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Gender:
        </label>

        <select
          value={formData.Gender}
          onChange={(e) =>
            setFormData({
              ...formData,
              Gender: e.target.value
            })
          }
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Age */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Age:
        </label>

        <input
          type="number"
          placeholder="Age"
          value={formData.Age}
          onChange={(e) =>
            setFormData({
              ...formData,
              Age: e.target.value
            })
          }
        />
      </div>

      {/* Tenure */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Tenure:
        </label>

        <input
          type="number"
          placeholder="Tenure"
          value={formData.Tenure}
          onChange={(e) =>
            setFormData({
              ...formData,
              Tenure: e.target.value
            })
          }
        />
      </div>

      {/* Balance */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Balance:
        </label>

        <input
          type="number"
          placeholder="Balance"
          value={formData.Balance}
          onChange={(e) =>
            setFormData({
              ...formData,
              Balance: e.target.value
            })
          }
        />
      </div>

      {/* Number of Products */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Num Of Products:
        </label>

        <input
          type="number"
          placeholder="Num Of Products"
          value={formData.NumOfProducts}
          onChange={(e) =>
            setFormData({
              ...formData,
              NumOfProducts: e.target.value
            })
          }
        />
      </div>

      {/* Has Credit Card */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Has Credit Card:
        </label>

        <select
          value={formData.HasCrCard}
          onChange={(e) =>
            setFormData({
              ...formData,
              HasCrCard: e.target.value
            })
          }
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      {/* Active Member */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Is Active Member:
        </label>

        <select
          value={formData.IsActiveMember}
          onChange={(e) =>
            setFormData({
              ...formData,
              IsActiveMember: e.target.value
            })
          }
        >
          <option value="">Select</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      {/* Estimated Salary */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ width: "150px", display: "inline-block" }}>
          Estimated Salary:
        </label>

        <input
          type="number"
          placeholder="Estimated Salary"
          value={formData.EstimatedSalary}
          onChange={(e) =>
            setFormData({
              ...formData,
              EstimatedSalary: e.target.value
            })
          }
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Predict
      </button>
      <h2>{result}</h2>

    </div>
  )
}

export default App