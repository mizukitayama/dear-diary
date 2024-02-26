import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";


const DiaryCard = () => {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nam, neque atque error voluptas voluptate similique harum reiciendis accusantium ut hic quam explicabo perferendis modi in, maxime suscipit laboriosam officiis.
			</CardContent>
			<CardFooter className="flex justify-between">
				<Link href='/diary-posts/1' className="text-blue-500">Read more</Link>
			</CardFooter>
		</Card>
	)
}

export default DiaryCard