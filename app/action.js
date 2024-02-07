'use server';
import { revalidateTag } from "next/cache";

export default async function action(){
    revalidateTag('collections');
}

export const editAction = async () => {
    revalidateTag('edit');
}