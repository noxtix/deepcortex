import {
    Html,
    Body,
    Head,
    Heading,
    Container,
    Preview,
    Section,
    Text,
    Button,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

export default function WelcomeEmail() {
    return (
        <Html>
            <Head />
            <Preview>Welcome to the Intelligence Brief</Preview>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                brand: "#10b981",
                                offwhite: "#fafafa",
                            },
                        },
                    },
                }}
            >
                <Body className="bg-black my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#333] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Text className="text-brand text-[14px] font-bold uppercase tracking-wider text-center">
                                DeepCortex
                            </Text>
                        </Section>

                        <Heading className="text-white text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Welcome to the <span className="text-brand">Intelligence Brief</span>
                        </Heading>

                        <Text className="text-[#ababab] text-[14px] leading-[24px]">
                            You have joined the curated circle of developers and creators.
                        </Text>

                        <Text className="text-[#ababab] text-[14px] leading-[24px]">
                            Expect the best AI tools, distilled playbooks, and zero noise in your inbox every Friday.
                        </Text>

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-brand rounded text-black text-[12px] font-bold px-[20px] py-[12px] no-underline hover:bg-[#059669]"
                                href="https://deepcortex.tech"
                            >
                                Browse the Directory
                            </Button>
                        </Section>

                        <Text className="text-[#666] text-[12px] leading-[24px] text-center">
                            No spam. Unsubscribe anytime. High signal only.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
