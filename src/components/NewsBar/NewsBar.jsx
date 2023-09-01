import {
  NewsBarContainer,
  Headline,
  HeadlineContainer,
} from "./news-bar.styles";
import { Fragment } from "react";

export default function NewsBar() {
  return (
    <NewsBarContainer>
      <HeadlineContainer>
        {[...Array(13)].map((_, i) => (
          <Fragment key={i}>
            <Headline>DISCUSS YOUR IDEAS</Headline>
            <div className="w-[62px]">
              <img
                className="max-h-full max-w-full"
                src="/src/assets/headline-image1.png"
                alt="rocket"
              />
            </div>
            <Headline>WE SELL CREATIVITY</Headline>
            <div className="w-[62px]">
              <img
                className="max-h-full max-w-full"
                src="/src/assets/headline-image2.png"
                alt="paint"
              />
            </div>
          </Fragment>
        ))}
      </HeadlineContainer>
    </NewsBarContainer>
  );
}
