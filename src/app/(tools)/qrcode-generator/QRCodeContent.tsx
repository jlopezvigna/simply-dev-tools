"use client";

import { DownloadIcon } from "@/component/icons/download-icon";
import { EmailIcon } from "@/component/icons/email-icon";
import { TextIcon } from "@/component/icons/text-icon";
import { UrlIcon } from "@/component/icons/url-icon";
import { WhatsappIcon } from "@/component/icons/whatsapp-icon";
import { HeaderTool } from "@/component/seccion/HeaderTool";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { Metadata } from "next";
import { QRCodeCanvas } from "qrcode.react";
import { useCallback, useState } from "react";
import { EmailForm, EmailFormValues } from "./EmailForm";
import { TextForm, TextFormValues } from "./TextForm";
import { UrlForm, UrlFormValues } from "./UrlForm";
import { WhatsappForm, WhatsappFormValues } from "./WhatsappForm";

type QrTabs = "url" | "email" | "text" | "whatsapp";

export default function QRCodeContent() {
  const [selected, setSelected] = useState<QrTabs>("url");
  const [qrValue, setQrValue] = useState<string>("");

  const changeTab = useCallback(
    (value: any) => {
      setSelected(value as QrTabs);
      setQrValue("");
    },
    [setSelected, setQrValue]
  );

  const handleUrl = (value: UrlFormValues) => {
    setQrValue(value.url);
  };

  const handleEmail = (value: EmailFormValues) => {
    const subject = value.subject
      ? encodeURIComponent(value.subject.trim())
      : "";
    const message = encodeURIComponent(value.message.trim());

    setQrValue(
      `<a href="mailto:${value.to}?subject=${subject}&body=${message}" />`
    );
  };

  const handleWhatsapp = (value: WhatsappFormValues) => {
    const message = encodeURIComponent(value.message.trim());
    setQrValue(`<a href="https://wa.me/${value.to}?text=${message}" />`);
  };

  const handleText = (value: TextFormValues) => {
    setQrValue(value.message);
  };

  const downloadQR = () => {
    const canvas: any = document.querySelector(".qrcode-container > canvas");

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <div className="grow sm:grow-0">
          <Tabs
            color="primary"
            size="md"
            aria-label="Tabs QR Codes"
            selectedKey={selected}
            onSelectionChange={changeTab}
            fullWidth
          >
            <Tab
              key="url"
              title={
                <div className="flex items-center space-x-2">
                  <UrlIcon />

                  <span className="hidden sm:block">URL</span>
                </div>
              }
            >
              <UrlForm onSubmit={handleUrl} />
            </Tab>
            <Tab
              key="email"
              title={
                <div className="flex items-center space-x-2">
                  <EmailIcon />

                  <span className="hidden sm:block">Email</span>
                </div>
              }
            >
              <EmailForm onSubmit={handleEmail} />
            </Tab>
            <Tab
              key="whatsapp"
              title={
                <div className="flex items-center space-x-2">
                  <WhatsappIcon />

                  <span className="hidden sm:block">Whatsapp</span>
                </div>
              }
            >
              <WhatsappForm onSubmit={handleWhatsapp} />
            </Tab>
            <Tab
              key="text"
              title={
                <div className="flex items-center space-x-2">
                  <TextIcon />

                  <span className="hidden sm:block">Text</span>
                </div>
              }
            >
              <TextForm onSubmit={handleText} />
            </Tab>
          </Tabs>
        </div>
        {qrValue !== "" && (
          <>
            <div className="qrcode-container flex justify-center items-start grow md:grow-0">
              <QRCodeCanvas
                id="qr-code"
                value={qrValue}
                size={200}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
              />
            </div>
            <Button
              startContent={<DownloadIcon />}
              color="primary"
              variant="flat"
              onClick={downloadQR}
            >
              Download
            </Button>
          </>
        )}
      </div>
    </>
  );
}
