import { Link } from "react-router-dom";
import{
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    Container,
    SimpleGrid,
    Box,
} from "@mantine/core";
import classes from './ProductList.module.css';
import ProductSearch from './ProductSearch';
import  useProducts  from "./hooks/useProducts.js";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function ProductList() {
    const [cart, setCart] = useState(0)
    function btnCart(){
        setCart(cart+1)
    }
    const { products } = useProducts();
    const renderProducts = () => products && products.length > 0 && products.map((product) => (
        <Card key={product.id} withBorder radius="md"
        className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image
                src={product.images[0]}
                alt="Tesla Model S"
                w={'100%'}
                h={'100%'}
                fit="contain"
                />
            </Card.Section>
            <Group justify="space-between" mt="md">
                <div>
                <Text fw={500}>{product.title}</Text>
                <Text fz="xs" c="dimmed">
                {/* Free recharge at any station */}
                Stok : {product.stock}
                </Text>
                </div>
                <Badge variant="outline">25% off</Badge>
            </Group>
                <Card.Section className={classes.section}>
                    <Group gap={30} justify="space-between" px={15}>
                        <div>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1
                            }}>
                            $ {product.price}
                            </Text>
                        </div>
                        <div className="cart">
                            <Button radius="xl" style={{ flex: 1 }} onClick={btnCart}>+</Button>
                            <Text>{cart}</Text>
                        </div>
                        <Link to={`/products/${product.id}`}>
                            <Button radius="xl" style={{ flex: 1 }}>
                                Beli
                            </Button>
                        </Link>
                    </Group>
                </Card.Section>
        </Card>
    ));
    return (
        <>
            <Navbar />
            <Container py="xl">
                <ProductSearch />
                <Box mb={15}>
                    <Text>Tersedia {products.length} produk</Text>
                </Box>
                <SimpleGrid cols={{ base: 1, sm: 3}}>{renderProducts()}</SimpleGrid>
            </Container>
        </>
    );
        
}