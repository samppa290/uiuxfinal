import "./Home.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [temperature, setTemperature] = useState(0);
  const [locker1, setLocker1] = useState(true);
  const [locker2, setLocker2] = useState(false);

  return (
    <div className="homeGrid">
      <Card>
        <CardHeader>
          <CardTitle>Drawers</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 grid-rows-2 gap-4">
          <Card className="flex items-center justify-center">
            <CardContent className="p-4">
              <span className="text-6xl">{locker1 ? "🔒" : "🔓"}</span>
            </CardContent>
          </Card>
          <Card className="flex items-center justify-center">
            <CardContent className="p-4">
              <span className="text-6xl">{locker2 ? "🔒" : "🔓"}</span>
            </CardContent>
          </Card>
          <Dialog>
            <DialogTrigger onClick={() => setLocker1(!locker1)}>
              {locker1 ? "Unlock" : "Lock"}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              sadfsadffsda
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger onClick={() => setLocker2(!locker2)}>
              {locker2 ? "Unlock" : "Lock"}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter passcode</DialogTitle>
                <DialogDescription>
                  
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temperature</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 justify-items-center">
          <Badge
            className="w-fit cursor-pointer"
            variant="default"
            onClick={() => {
              if (temperature < 12) setTemperature(temperature + 1);
            }}
          >
            <img src="src/assets/plus.svg" alt="plus icon" />
          </Badge>

          <span className="text-5xl">{temperature}°C</span>
          <Badge
            className="w-fit cursor-pointer"
            variant="default"
            onClick={() => {
              if (temperature !== 0) setTemperature(temperature - 1);
            }}
          >
            <img src="src/assets/minus.svg" alt="plus icon" />
          </Badge>
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-2">
          <p>Optimal</p>
          <Badge variant="default"></Badge>
        </CardFooter>
      </Card>

      <a href="/shopping">
        <Button variant="default" className="gap-4 w-full">
          Items & Shopping
          <img
            alt="arrow iocn"
            src="src/assets/arrow-right.svg"
            className="arrow-right-svg"
          />
        </Button>
      </a>

      <a href="/recipes">
        <Button variant="default" className="gap-4 w-full">
          Recipes
          <img
            alt="arrow iocn"
            src="src/assets/arrow-right.svg"
            className="arrow-right-svg"
          />
        </Button>
      </a>
    </div>
  );
}
