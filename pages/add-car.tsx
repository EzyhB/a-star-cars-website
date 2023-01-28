import React, { SyntheticEvent, useState } from "react";
import { Container } from "../components/styles/Container";
import { uuid } from "uuidv4";

import css from "../styles/add-car.module.css";
import BasicInput from "../components/styles/BasicInput";
import ButtonHollow from "../components/styles/ButtonHollow";

export default function AddCar() {
  const [previewImages, setPreviewImages] = useState<File[]>([]);

  const handleSubmit = (event: SyntheticEvent) => {};

  const handleDrop = (event: DragEvent) => {
    // This is called when one or more images are dropped on the component
    event.preventDefault();
    const form = event.dataTransfer as DataTransfer;
    const images = Array.from(form.files);

    if (images.length > 0 && images.length <= 40) {
      // Show the images in the preview
      console.log(images);
      setPreviewImages(images);
    } else {
      // Handle error - either no images were dropped or too many were dropped
    }
  };
  const moveImageUp = (index: number) => {
    // This function moves an image up in the preview
    const images = [...previewImages];

    // For example, by swapping it with the previous image in the array:
    [images[index - 1], images[index]] = [images[index], images[index - 1]];
    setPreviewImages(images);
  };

  const moveImageDown = (index: number) => {
    // This function moves an image down in the preview
    const images = [...previewImages];

    // For example, by swapping it with the next image in the array:
    [images[index + 1], images[index]] = [images[index], images[index + 1]];
    setPreviewImages(images);
  };

  function removeImage(index: number) {
    // This function removes an image from the preview
    // For example, by splicing it out of the array:
    const images = [
      ...previewImages.slice(0, index),
      ...previewImages.slice(index + 1),
    ];
    setPreviewImages(images);
  }

  const saveImagesToDatabase = () => {
    const formData = new FormData();
    previewImages.forEach((image) => formData.append("images[]", image));

    console.log(formData);

    // Save the images to the S3 server
    /*fetch("/api/upload", {
      method: "POST",
      body: formData,
    });*/

    /*(
      // Generate URLs for the images on the server and save them to the database
      fetch("/api/urls", {
        method: "POST",
        body: JSON.stringify({ images: previewImages }),
      })
    );*/
  };

  return (
    <Container maxWidth="none">
      <Container background="primary" maxWidth="xl">
        <div onSubmit={(e) => handleSubmit(e)}>
          <form className={css.addCarForum}>
            <BasicInput type="text" placeholder="car name"></BasicInput>
            <BasicInput type="text" placeholder="car sub name"></BasicInput>
            <BasicInput type="text" placeholder="price"></BasicInput>
            <BasicInput type="text" placeholder="miles"></BasicInput>
            <BasicInput
              type="text"
              placeholder="registration year"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="transition(manual/automatic)"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="Fuel type(petrol/electric)"
            ></BasicInput>
            <BasicInput type="text" placeholder="seats"></BasicInput>
            <BasicInput
              type="text"
              placeholder="engine size(0 if electric)"
            ></BasicInput>
            <BasicInput type="text" placeholder="body type"></BasicInput>
            <BasicInput type="text" placeholder="exterior colour"></BasicInput>
            <BasicInput type="text" placeholder="drive type"></BasicInput>
            <BasicInput
              type="text"
              placeholder="registration number"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="number of previous owners"
            ></BasicInput>
            <BasicInput type="text" placeholder="number of keys"></BasicInput>
            <BasicInput type="text" placeholder="top speed (MPH)"></BasicInput>
            <BasicInput
              type="text"
              placeholder="acceleration (0-60)"
            ></BasicInput>
            <BasicInput type="text" placeholder="power (BHP)"></BasicInput>

            <ButtonHollow size="xl" type="submit">
              Submit
            </ButtonHollow>
          </form>
        </div>
      </Container>
    </Container>
  );
}
