import type { NextPage } from "next";
import { PageWrapper } from "../components/Wrapper/Wrapper";

const Videos: NextPage = () => {
  return (
    <PageWrapper
      title="Video demo"
      subtitle="Watch this video by Anders Brownworth to fully understand"
    >
      <div className="w-[calc(100vw-theme(space.6))] md:w-1/2 ml-3 md:ml-32 flex items-center justify-center">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/_160oMzblY8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </PageWrapper>
  );
};

export default Videos;
