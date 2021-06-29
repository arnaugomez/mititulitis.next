import LatestPosts from "../post/view/LatestPosts";
import MaxWidth from "../common/view/atoms/MaxWidth";
import TripticLayout from "../common/view/atoms/TripticLayout";
import AsideLoginRegister from "../user/view/AsideLoginRegister";
import RightSidebar from "../common/view/components/RightSidebar";
import Banner from "../news/views/Banner";

const index = (): JSX.Element => (
  <MaxWidth>
    <TripticLayout left={<AsideLoginRegister />} right={<RightSidebar />}>
      <Banner />
      <LatestPosts />
    </TripticLayout>
  </MaxWidth>
);

export default index;
