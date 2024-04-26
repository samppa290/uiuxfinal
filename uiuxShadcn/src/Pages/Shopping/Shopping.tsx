import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

function Shopping() {
  const shoppingLists = [
    {
      name: "Friday’s buzz list",
      description: "Stuff for friday",
    },
    {
      name: "Friday’s buzz list",
      description: "Stuff for friday",
    },
    {
      name: "Friday’s buzz list",
      description: "Stuff for friday",
    },
  ];

  const items = [
    {
      count: 5,
      icon: "🍅",
      name: "Tomato",
    },
    {
      count: 2,
      icon: "🥩",
      name: "Steak",
    },
    {
      count: 1,
      icon: "🥒",
      name: "Cucumber",
    },
    {
      count: 1,
      icon: "🥑",
      name: "Avocado",
    },
    {
      count: 5,
      icon: "🧅",
      name: "Onion",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-left font-bold">Items in fridge</h2>
      <Card className="flex flex-row gap-4 p-4 bg-slate-700">
        {items.map((item, index) => (
          <Card key={index} className="w-40">
            <CardHeader>
                <Badge className="w-fit" >{item.count}</Badge>

            </CardHeader>
            <CardContent>
              <span className="text-6xl cursor-default">{item.icon}</span>
            </CardContent>
            <CardFooter>
              <p>{item.name}</p>
            </CardFooter>
          </Card>
        ))}
      </Card>

      <h2 className="text-left font-bold">Shopping lists</h2>
      <Button className="flex gap-4 w-fit">
        <img
          alt="settings icon"
          src="src/assets/plus.svg"
          className="h-6 cursor-pointer"
        />
        <span>New shopping list</span>
      </Button>
      {shoppingLists.map((list, index) => (
        <a key={index} href="/shopping-list" className="w-fit">
          <Card className="flex flex-col items-start w-fit min-w-80">
            <CardHeader className="flex items-start">
              <CardTitle>{list.name}</CardTitle>
              <CardDescription>{list.description}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  );
}

export default Shopping;
