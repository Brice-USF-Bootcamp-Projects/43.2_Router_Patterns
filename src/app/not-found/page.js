// src/app/not-found/page.js

import { redirect } from "next/navigation";

export default function NotFound() {
  redirect("/dogs");
}
