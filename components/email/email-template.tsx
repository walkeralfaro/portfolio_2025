import {
  Html,
  Body,
  Text,
  Container,
  Section,
  Heading,
} from "@react-email/components";

export function EmailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Section>
            <Heading>New contact message</Heading>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
