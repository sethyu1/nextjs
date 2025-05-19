import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from './meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'

export const metadata = {
  title: 'All Meals ',
  description: 'Browse the delicous meals shared by our vibrant community ',
};

async function Meals() {
    console.log('Fetching meals');
    const meals = await getMeals()

    return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Chooose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favoriete Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals />
                </Suspense>
            </main>
        </>
    )
}