import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";

import React, { useState } from "react";
import { Container, Select, MenuItem } from "@mui/material";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const [timeWindow, setTimeWindow] = useState("Last 7 days");

	const handleTimeWindowChange = (event) => {
		setTimeWindow(event.target.value);
	};

	return (
		<Box m="20px">
			{/* HEADER */}
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Header
					title="DASHBOARD"
					subtitle="Welcome to your dashboard"
				/>
				<Box>
					<Container maxWidth="lg">
						<Box sx={{ my: 3 }}>
							{/* Filter Section */}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									mb: 3,
									"@media (max-width: 768px)": {
										gridColumn: "span 1",
										padding: "8px",
									},
								}}
							>
								<Select
									value={timeWindow}
									onChange={handleTimeWindowChange}
									sx={{ minWidth: 150 }}
								>
									<MenuItem value="Last 7 days">Last 7 days</MenuItem>
									<MenuItem value="Last 30 days">Last 30 days</MenuItem>
									<MenuItem value="Last 90 days">Last 90 days</MenuItem>
								</Select>
							</Box>
						</Box>
					</Container>
				</Box>

				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
							"@media (max-width: 768px)": {
								gridColumn: "span 1",
								padding: "8px",
							},
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* ROW 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
						},
					}}
				>
					<StatBox
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
						},
					}}
				>
					<StatBox
						title="431,225"
						subtitle="Sales Obtained"
						progress="0.50"
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
						},
					}}
				>
					<StatBox
						title="32,441"
						subtitle="New Clients"
						progress="0.30"
						increase="+5%"
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
						},
					}}
				>
					<StatBox
						title="1,325,134"
						subtitle="Traffic Received"
						progress="0.80"
						increase="+43%"
						icon={
							<TrafficIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>

				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					height="350px"
					backgroundColor={colors.primary[400]}
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
						},
					}}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex "
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Revenue Generated
							</Typography>
							<Typography
								variant="h3"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								$59,342.32
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box
						height="300px"
						m="-20px 0 0 0"
					>
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					height={350}
					backgroundColor={colors.primary[400]}
					sx={{
						"@media (max-width: 768px)": {
							gridColumn: "span 12",
							padding: "8px",
							mt: 7,
						},
					}}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ padding: "30px 30px 0 30px" }}
					>
						Sales Quantity
					</Typography>
					<Box
						height="300px"
						mt="-20px"
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
