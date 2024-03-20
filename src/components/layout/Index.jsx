import { Button, Group, Text } from "@mantine/core";

const Card = () => {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}

export default Card
