import React, { useState, useEffect } from "react"

import { useForm } from "react-hook-form"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"

import "./Contact.scss"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
  "form-name": string
}

const Contact = () => {
  const { register, errors, handleSubmit, reset, formState } = useForm<Inputs>({
    mode: "onChange",
  })

  const [notification, setNotification] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (notification === true) {
      setTimeout(() => {
        setNotification(false)
      }, 2000)
    }
  }, [notification])

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = async (data: Inputs) => {
    setSubmitting(true)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then((res) => {
        console.log(res)
        if(res.status !== 200) {
          throw new Error('error');
        }
        
        setSuccess(true)
        reset()
      })
      .catch(() => {
        setSuccess(false)
      })
      .finally(() => {
        setNotification(true)
        setSubmitting(false)
      })
  }

  return (
    <section id="Contact" title="Contact" className="Contact block-section">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <h2 className="title is-2 has-text-white">
            <FontAwesomeIcon
              className="flex-align-self-center"
              icon={faEnvelope}
              size="2x"
            />{" "}
            Contact Me
          </h2>
        </div>
      </div>
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              name="form-name"
              type="hidden"
              value="contact"
              ref={register}
            />
            <div className="field">
              <label className="label has-text-white-ter">Name</label>
              <div className="control has-icons-right">
                <input
                  className={`input ${errors.name && "is-danger"}`}
                  name="name"
                  type="text"
                  ref={register({ required: true, maxLength: 50 })}
                />
                {errors.name && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon
                      className="flex-align-self-center"
                      fixedWidth
                      icon={faExclamationTriangle}
                    />
                  </span>
                )}
              </div>
              {errors.name && (
                <p className="help is-danger">This field is required</p>
              )}
            </div>

            <div className="field">
              <label className="label has-text-white-ter">Email</label>
              <div className="control has-icons-right">
                <input
                  className={`input ${errors.email && "is-danger"}`}
                  name="email"
                  type="text"
                  ref={register({
                    required: true,
                    maxLength: 254,
                    pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  })}
                />
                {errors.email && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon
                      className="flex-align-self-center"
                      fixedWidth
                      icon={faExclamationTriangle}
                    />
                  </span>
                )}
              </div>
              {errors.email && (
                <p className="help is-danger">This email is invalid</p>
              )}
            </div>

            <div className="field">
              <label className="label has-text-white-ter">Subject</label>
              <div className="control has-icons-right">
                <input
                  className={`input ${errors.subject && "is-danger"}`}
                  name="subject"
                  type="text"
                  ref={register({ required: true, maxLength: 70 })}
                />
                {errors.subject && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon
                      className="flex-align-self-center"
                      fixedWidth
                      icon={faExclamationTriangle}
                    />
                  </span>
                )}
              </div>
              {errors.subject && (
                <p className="help is-danger">This field is required</p>
              )}
            </div>

            <div className="field">
              <label className="label has-text-white-ter">Message</label>
              <div className="control has-icons-right">
                <textarea
                  className={`textarea ${errors.message && "is-danger"}`}
                  name="message"
                  rows={10}
                  ref={register({ required: true })}
                ></textarea>
                {errors.message && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon
                      className="flex-align-self-center"
                      fixedWidth
                      icon={faExclamationTriangle}
                    />
                  </span>
                )}
              </div>
              {errors.message && (
                <p className="help is-danger">This field is required</p>
              )}
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="button is-link"
                  type="submit"
                  disabled={!formState.isValid || submitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`notification is-success ${
          notification && success ? "show" : ""
        }`}
      >
        <button
          className="delete"
          onClick={() => setNotification(false)}
        ></button>
        Message Successfully Sent.
      </div>

      <div
        className={`notification is-danger ${
          notification && !success ? "show" : ""
        }`}
      >
        <button
          className="delete"
          onClick={() => setNotification(false)}
        ></button>
        An Error Occured. Your Message Could Not Be Sent
      </div>
    </section>
  )
}

export default Contact
