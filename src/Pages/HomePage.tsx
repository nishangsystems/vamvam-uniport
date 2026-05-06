import Button from "../components/ui/Button";
import PageSEO from "../components/common/PageSEO";

const HomePage = () => {
    return (
          <>
   <PageSEO
        title="Home"
        description="Welcome to VamVam Uniport - Your trusted university port platform"
      />
            
            <div>
                <h1>Home Page</h1>
                <Button>Click</Button>
            </div>
        </>
    )
}

export default HomePage;