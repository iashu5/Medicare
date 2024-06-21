import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are the hospital's visiting hours?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Visiting hours are from 9:00 AM to 8:00 PM every day. Please check with specific departments for any variations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I make an appointment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can make an appointment by calling our appointment line at (123) 456-7890 or through our online booking system on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What should I bring for my admission?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please bring your ID, insurance card, a list of current medications, and any relevant medical records.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What insurance plans do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We accept most major insurance plans. Please check our website for a full list or contact our billing department for more details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I pay my bill?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bills can be paid online through our secure payment portal, by mail, or in person at the billing office.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What types of services do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offer a wide range of services including emergency care, surgery, maternity, pediatrics, cardiology, oncology, and more. Visit our website for a complete list.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What should I do in case of an emergency?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In case of an emergency, call 911 or go directly to our emergency department, which is open 24/7.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are the hospital's COVID-19 protocols?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We follow strict protocols including mandatory masks, temperature checks, social distancing, and enhanced cleaning. Please visit our COVID-19 information page for the latest updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is your policy on visitors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Visitors are allowed during visiting hours but may be limited based on current health guidelines. Check our website or call (123) 456-7890 for the latest policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Are there accommodations for overnight visitors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we have limited accommodations for overnight visitors. Please speak with the nurse manager on your floor for arrangements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Can I reschedule or cancel my appointment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can reschedule or cancel your appointment by calling our appointment line at (123) 456-7890 at least 24 hours in advance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I obtain an estimate for my procedure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can request an estimate by contacting our billing department at (123) 456-7890 or using the cost estimator tool on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
