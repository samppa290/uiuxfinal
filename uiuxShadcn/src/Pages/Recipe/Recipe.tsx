import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Recipe() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader className="items-start">
          <CardTitle>Basic pasta</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-left">
            In the realm of culinary simplicity, "Basic Pasta" stands as a
            testament to the beauty of minimalism. A dish that whispers tales of
            rustic Italian kitchens, where the harmony of simple ingredients
            creates a symphony of flavors. Each strand of pasta, a canvas
            waiting to be painted with the rich hues of tradition and the
            vibrant colors of innovation. 
            <br/><br/>
            Imagine a dish that embodies the
            essence of comfort, a culinary embrace that turns a humble meal into
            an exquisite experience. "Basic Pasta" is not just food; it's a
            journey through time and culture, a bridge between the past and the
            present. It's a celebration of the uncomplicated, where the quality
            of each ingredient is allowed to shine, unobstructed by the
            unnecessary. 
            <br/><br/>
            "Basic Pasta" is more than a recipe—it's a philosophy.
            A reminder that sometimes, the most profound experiences come from
            the simplest things. This dish invites you to explore the depth of
            flavors achievable with just a few well-chosen ingredients,
            encouraging a deeper appreciation for the art of cooking. 
            <br/><br/>
            Let "Basic
            Pasta" serve as a symbol of simplicity's power, a culinary metaphor
            for life's most fundamental pleasures. It's an ode to those moments
            that, although seemingly ordinary, become the memories we cherish
            the most.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Recipe;
