
import { STRAPI_BASE_URL } from "@/lib/strapi";


export function HeroSection({data}:{readonly data:{ heading:string, subHeading:string, link:{href:string, label:string}, image:{url:string, alternativeText:string}} | null}) {
    if(!data) return null;

    const {heading, subHeading,} = data;
    const imageUrl = data.image?.url.startsWith("http") ? data.image.url : `${STRAPI_BASE_URL}${data.image?.url}`;

    return (
        <header className="relative h-[600px] overflow-hidden">
            <img
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
                height={1080}
                src={imageUrl}
                style={{
                    aspectRatio:"1920/1080",
                    objectFit:"cover",
                }}
                width={1920}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 lg:text-2xl">{heading}</h1>
                <p className="text-lg md:text-2xl lg:text-base">{subHeading}</p>
            </div>
        </header>
    )
}