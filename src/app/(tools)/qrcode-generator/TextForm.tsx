import { Button, Textarea } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export interface TextFormValues {
  message: string;
}

interface Props {
  onSubmit: (values: TextFormValues) => void;
}

export const TextForm: React.FC<Props> = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    message: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, dirty }) => (
        <Form>
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
