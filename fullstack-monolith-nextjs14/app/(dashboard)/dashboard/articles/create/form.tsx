"use client";

import { useState } from "react";
import { DashboardArticlesCreateDto } from "./dto";

export default function DashboardArticlesCreateForm() {
  const [title, setTitle] = useState<string>(
    "Заголовок статьи"
  );
  const [content, setContent] =
    useState<string>("Содержание");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const request: DashboardArticlesCreateDto = {
      title: title,
      content: content,
    };

    // alert(JSON.stringify({ title, content }));

    // send data to api
    const res = await response(request);
  };

  const response = async (
    formData: DashboardArticlesCreateDto
  ) => {
    const requestBody = {
      title: title,
      content: content,
    };

    const res = await fetch("/api/articles/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await res.json();

    alert(JSON.stringify(responseData));

    return responseData;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Заголовок'
          value='Заголовок статьи'
        />
        <textarea
          name='content'
          placeholder='Содержание'
          value='Содержание'
        />
        <input type='submit' value='Сохранить' />
      </form>
    </>
  );
}
