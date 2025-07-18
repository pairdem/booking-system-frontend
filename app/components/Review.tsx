import { index } from "@react-router/dev/routes";
import { ArrowRight } from "lucide-react";
import img1 from "@/assets/images/user1.avif";
import img2 from "@/assets/images/user2.avif";
import img3 from "@/assets/images/user2.avif";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";

const reviews = [
  {
    name: "hullazamosc",
    location: "Zamosc, Poland",
    contributions: 26,
    rating: 3,
    title: "Amazing Experience",
    image: img1,
    content:
      "We had a great experience. Visiting this park is a must while in GHANA. We learnt alot about the colonial. The history was very sweet. He was the first prime minister that’s why it was named after him.",
    reviewLink: "Review of: Kwame Nkrumah Memorial Park",
    date: "August 28, 2024",
  },
  {
    name: "Alan D",
    location: "Aurora, CO",
    contributions: 89,
    rating: 3,
    title: "Accra's largest open-air market",
    image: img2,
    content:
      "Makola market is amazing - blocks and blocks of people selling goods (clothing), services (beauty treatments), and food. Parts of the market are so packed with people that you will struggle to get down a street. If massive crowds bother you, there are other parts that are less crowded and worth a visit.",
    reviewLink: "Review of: Makola Market",
    date: "December 21, 2024",
  },
  {
    name: "Gracjan",
    location: "Canton of Solothurn, Switzerland",
    contributions: 136,
    rating: 4,
    title: "Almost very good",
    image: img3,
    content:
      "The beach itself is beautiful and not crowded. There are some bars and chairs, so you can have a nice day there. But...you need to pay an entrance fee, which is not low to get there and the prizes for food and drink are very high. Even though it is forbidden to take something with you (why???), you should do it...",
    reviewLink: "Review of: Bojo Beach",
    date: "November 9, 2024",
    hasReadMore: true,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 py-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={`star-${index}`} // Using index with a string prefix
        className={`h-2 w-2 rounded-full ${i < rating ? "bg-green-600" : "bg-gray-300"}`}
      />
    ))}
  </div>
);

export default function ReviewComponent() {
  return (
    <section className="py-6">
      <h2 className="mb-6 font-bold text-2xl">What travelers are saying</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name} className="border shadow-md">
            <CardContent className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-8 w-8 rounded-full bg-gray-300 object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {review.location} • {review.contributions} contributions
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <StarRating rating={review.rating} />
                <div className="text-muted-foreground text-sm">👍 0</div>
              </div>
              <h3 className="mt-2 mb-1 font-semibold text-base">
                {review.title}
              </h3>
              <p className="mb-2 text-muted-foreground text-sm">
                {review.content.length > 200
                  ? `${review.content.slice(0, 150)}...`
                  : review.content}
              </p>
              {review.hasReadMore && (
                <button
                  type="button"
                  className="mb-2 font-medium text-green-700 text-sm underline"
                >
                  Read more
                </button>
              )}
              <p className="mb-1 text-green-700 text-sm underline">
                {review.reviewLink}
              </p>
              <p className="mb-2 text-muted-foreground text-xs">
                Written {review.date}
              </p>
              <p className="text-[10px] text-muted-foreground">
                This review is the subjective opinion of a Tripadvisor member
                and not of Tripadvisor LLC. Tripadvisor performs checks on
                reviews.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button className="cursor-pointer gap-2">
          Related Stories <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
