import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps) => {
  const pmessage = `Read ${name}'s message`;

  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="bg-white font-airbnb">
          <Preview>{pmessage}</Preview>
          <Container className="mx-auto py-5 pb-12 w-[580px] max-w-full">
            <Section className='mb-8'>
              <Img
                src={`https://avatars.githubusercontent.com/u/98902569`}
                width="60"
                height="60"
                alt="Walker Alfaro Logo"
              />
            </Section>

            <Section className="pb-2">
              <Row>
                <Text className="text-[32px] leading-[1.3] font-bold text-[#484848]">
                  Here's what{" "}
                  <span className="text-[#f472b6]">{name}</span>
                  {" "}wrote
                </Text>
                <Text className="text-lg leading-[1.4] text-[#484848] p-6 bg-[#f2f3f3] rounded">
                  {message}
                </Text>
                <Text className="text-lg leading-[1.4] text-[#484848] mt-2">
                  Thank you for contacting me. I will get back to you as soon as
                  possible to email {" "} <span className="text-[#f472b6]">{email}</span>
                </Text>
              </Row>
            </Section>

            <Section>
              <Row>
                <Hr className="border-[#cccccc] my-5" />
                <Text className="text-[#9ca299] text-[13px] leading-[24px] mb-2.5">
                  © {new Date().getFullYear()} Walker Alfaro — All rights
                  reserved.
                </Text>
                <Link
                  href="https://www.walkeralfaro.com/"
                  className="text-[14px] text-[#f472b6] underline font-medium"
                >
                  www.walkeralfaro.com
                </Link>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
