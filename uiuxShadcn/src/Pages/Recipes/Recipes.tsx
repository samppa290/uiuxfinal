import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Recipes() {
  const recipesData = [
    {
      name: "Spaghetti Carbonara",
      shortDescription:
        "A classic Italian pasta dish made with cream, eggs, Parmesan cheese, and pancetta.",
    },
    {
      name: "Chicken Tikka Masala",
      shortDescription:
        "A popular Indian curry recipe with roasted marinated chicken pieces in a spicy sauce.",
    },
    {
      name: "Beef Stew",
      shortDescription:
        "A hearty stew made with slow-cooked beef, potatoes, carrots, and herbs.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 max-w-screen-sm m-auto">
      <div className="flex w-full max-w-sm items-center space-x-2 justify-center items-center m-auto">
        <Input type="text" placeholder="Search recipes" />
        <Button type="submit">Search</Button>
      </div>

      <div className="flex flex-col gap-4">
        {recipesData.map((recipe, index) => (
          <a href="/recipe" key={index}>
            <Card>
              <CardHeader className="items-start">
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>{recipe.shortDescription}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
