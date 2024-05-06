import { Container, Text, VStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const languages = {
  JavaScript: {
    defaultText: "// Write your JavaScript code here",
    syntaxColor: "#f1e05a"
  },
  HTML: {
    defaultText: "<!-- Write your HTML code here -->",
    syntaxColor: "#e34c26"
  },
  CSS: {
    defaultText: "/* Write your CSS code here */",
    syntaxColor: "#563d7c"
  }
};

const Index = () => {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(languages[language].defaultText);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setCode(languages[newLanguage].defaultText);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Simple Code Editor</Text>
        <select value={language} onChange={handleLanguageChange} style={{ padding: '8px', fontSize: '16px', marginBottom: '20px' }}>
          {Object.keys(languages).map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Start coding..."
          size="lg"
          height="500px"
          width="100%"
          style={{ fontFamily: 'monospace', fontSize: '16px', color: languages[language].syntaxColor }}
        />
      </VStack>
    </Container>
  );
};

export default Index;