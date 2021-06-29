import LatestPosts from "../post/view/LatestPosts";
import MaxWidth from "../common/view/atoms/MaxWidth";
import Button from "../common/view/atoms/Button";
import TripticLayout from "../common/view/atoms/TripticLayout";
import AsideLoginRegister from "../user/view/AsideLoginRegister";
import RightSidebar from "../common/view/components/RightSidebar";
import Banner from "../news/views/Banner";

const index = (): JSX.Element => (
  <MaxWidth>
    {/*<LatestPosts />*/}
    <TripticLayout left={<AsideLoginRegister />} right={<RightSidebar />}>
      <Banner />
      <h1>mititulitis.com Header 1</h1>
      <h2>Header 2 </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda commodi consectetur dicta distinctio eius eos laboriosam neque
        nobis optio tempora, voluptatem voluptatum? Culpa distinctio doloremque
        illum iure obcaecati veritatis.
      </p>
      <h3>Header 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda commodi consectetur dicta distinctio eius eos laboriosam neque
        nobis optio tempora, voluptatem voluptatum? Culpa distinctio doloremque
        illum iure obcaecati veritatis.
      </p>
      <h4>Header 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda commodi consectetur dicta distinctio eius eos laboriosam neque
        nobis optio tempora, voluptatem voluptatum? Culpa distinctio doloremque
        illum iure obcaecati veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda commodi consectetur dicta distinctio eius eos laboriosam neque
        nobis optio tempora, voluptatem voluptatum? Culpa distinctio doloremque
        illum iure obcaecati veritatis.
      </p>
    </TripticLayout>
    <Button variant="primary">Eric Goodlow</Button>
  </MaxWidth>
);

export default index;
