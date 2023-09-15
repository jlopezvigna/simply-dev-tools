import { Button, Input } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export interface UrlFormValues {
  url: string;
}

interface Props {
  onSubmit: (values: UrlFormValues) => void;
}

export const UrlForm: React.FC<Props> = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    url: Yup.string().url().required("Required"),
  });

  return (
    <Formik
      initialValues={{ url: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, dirty }) => (
        <Form>
          <Field
            as={Input}
            id="url"
            name="url"
            isRequired
            label="Url"
            errorMessage={errors.url && touched.url && errors.url}
            validationState={errors.url && touched.url ? "invalid" : "valid"}
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
