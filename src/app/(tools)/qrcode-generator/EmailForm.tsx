import { EmailIcon } from "@/component/icons/email-icon";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export interface EmailFormValues {
  to: string;
  subject?: string;
  message: string;
}

interface Props {
  onSubmit: (values: EmailFormValues) => void;
}

export const EmailForm: React.FC<Props> = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    to: Yup.string().email().required("Required"),
    subject: Yup.string(),
    message: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ to: "", subject: "", message: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, dirty }) => (
        <Form>
          <Field
            as={Input}
            id="to"
            name="to"
            isRequired
            label="To"
            className="mb-6"
            startContent={
              <EmailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            errorMessage={errors.to && touched.to && errors.to}
            validationState={errors.to && touched.to ? "invalid" : "valid"}
          />
          <Field
            as={Input}
            id="subject"
            name="subject"
            label="Subject"
            className="mb-6"
            errorMessage={errors.subject && touched.subject && errors.subject}
            validationState={
              errors.subject && touched.subject ? "invalid" : "valid"
            }
          />
          <Field
            as={Textarea}
            id="message"
            name="message"
            label="Message"
            className="mb-6"
            isRequired
            errorMessage={errors.message && touched.message && errors.message}
            validationState={
              errors.message && touched.message ? "invalid" : "valid"
            }
          />

          <Button
            color="primary"
            type="submit"
            className="mt-4"
            isDisabled={!dirty}
          >
            Generate QR Code
          </Button>
        </Form>
      )}
    </Formik>
  );
};
