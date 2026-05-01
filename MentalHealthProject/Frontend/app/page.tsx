'use client'
import { Button } from "@/components/ui/button"
import Questions from "./Selection Fields/questions"
import InputField from "./InputFields/InputField"
import { useState } from "react"
import axios from "axios"
import { Field, FieldError } from "@/components/ui/field"

export default function Page() {
  const [submited, setSubmited] = useState(false)
  const [prediction, setPrediction] = useState(0.0)
  const [predictionDone, setPredictionDone] = useState(false)
  const [data, setData] = useState({
    gender: "",
    education: "",
    country: "",
    social: "",
    academic: "",
    sleep: "",
    socialUse: "",
    age:""
  })

  const validateInput = (data) => {
  if (
    data.gender === "" ||
    data.education === "" ||
    data.country === "" ||
    data.social === "" ||
    data.academic === "" ||
    data.sleep === "" ||
    data.socialUse === ""
  ) {
    return false; 
  }

  return true; 
};



  const updateField = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setSubmited(true)
    const isValid = validateInput(data)
    if (!isValid) {
      return
    }

    const payload = {
      Age: Number(data.age),
      Gender: data.gender,
      Academic_Level: data.education,
      Country: data.country,
      Avg_Daily_Usage_Hours: Number(data.socialUse),
      Most_Used_Platform: data.social,
      Affects_Academic_Performance: data.academic,
      Sleep_Hours_Per_Night: Number(data.sleep),
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", payload)
      console.log(res.data)
      setPrediction(res.data.prediction)
      setPredictionDone(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex min-h-svh p-6 justify-center">
      <div className="flex max-w-md flex-col gap-4 text-sm leading-loose">
        
        <h1 className="text-4xl font-extrabold text-center">
          Mental Health Predictor (using Kaggle Dataset)
        </h1>

        {/* Gender */}
        <div>
          <p>Choose your gender</p>
          <Questions
            value={data.gender}
            onChange={(val) => updateField("gender", val)}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            submitted={submited}
          />
        </div>

        {/* Education */}
        <div>
          <p>Choose your education level</p>
          <Questions
            value={data.education}
            onChange={(val) => updateField("education", val)}
            options={[
              { value: "Undergraduate", label: "Undergraduate" },
              { value: "Graduate", label: "Graduate" },
              { value: "High School", label: "High School" },
            ]}
            submitted={submited}
          />
        </div>

        {/* Country */}
        <div>
          <p>Choose your country</p>
          <Questions
            value={data.country}
            onChange={(val) => updateField("country", val)}
            options={[
              { value: "Canada", label: "Canada" },
              { value: "USA", label: "USA" },
              { value: "India", label: "India" },
              { value: "Australia", label: "Australia" },
              { value: "UK", label: "UK" },
              { value: "Germany", label: "Germany" },
              { value: "Other", label: "Other" },
            ]}
            submitted={submited}
          />
        </div>

        {/* Social platform */}
        <div>
          <p>Most used social media</p>
          <Questions
            value={data.social}
            onChange={(val) => updateField("social", val)}
            options={[
              { value: "Facebook", label: "Facebook" },
              { value: "TikTok", label: "TikTok" },
              { value: "LinkedIn", label: "LinkedIn" },
              { value: "Instagram", label: "Instagram" },
              { value: "Twitter", label: "Twitter" },
              { value: "Snapchat", label: "Snapchat" },
              { value: "YouTube", label: "YouTube" },
            ]}
            submitted={submited}
          />
        </div>

        {/* Academic impact */}
        <div>
          <p>Does social media affect academics?</p>
          <Questions
            value={data.academic}
            onChange={(val) => updateField("academic", val)}
            options={[
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            submitted={submited}
          />
        </div>

        {/* Sleep */}
        <div>
          <p>Sleep hours</p>
          <InputField
            type="number"
            placeholder="Hours of sleep"
            value={data.sleep}
            onChange={(val) => updateField("sleep", val)}
            submitted={submited}  
          />
        </div>

        {/* Social usage */}
        <div>
          <p>Daily social media usage (hours)</p>
          <InputField
            type="number"
            placeholder="Hours per day"
            value={data.socialUse}
            onChange={(val) => updateField("socialUse", val)}
            submitted={submited}
          />
        </div>

        <div>
          <p>Enter Age </p>
          <InputField
            type="number"
            placeholder="Years"
            value={data.age}
            onChange={(val) => updateField("age", val)}
            submitted={submited}
          />
        </div>

        <Button className="w-full" onClick={handleSubmit}>
          Predict
        </Button>
        {predictionDone && (
          <div>
            <p className="text-sm text-muted-foreground"> Your mental health score: {prediction} </p>
          </div>
        )}

      </div>
    </div>
  )
}