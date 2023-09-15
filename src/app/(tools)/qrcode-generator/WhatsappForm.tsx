import { PhoneIcon } from "@/component/icons/phone-icon";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export interface WhatsappFormValues {
  to: string;
  message: string;
}

interface Props {
  onSubmit: (values: WhatsappFormValues) => void;
}

export const WhatsappForm: React.FC<Props> = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    to: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ to: "", message: "" }}
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
              <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            errorMessage={errors.to && touched.to && errors.to}
            validationState={errors.to && touched.to ? "invalid" : "valid"}
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
