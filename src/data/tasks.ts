
import { TaskWithSteps } from "@/types";

export const TASKS_DATA: TaskWithSteps[] = [
  {
    id: 1,
    title: "Create Your First Test",
    description: "Introduction to setting up a network test",
    completed: false,
    steps: [
      {
        title: "Navigate to Tests Section",
        description: "From the left pane menu, browse to Network&App Synthetics, then Select Test Settings:",
        image: "/images/task1-step1.png",
        resources: [
          {
            title: "Test Configuration Documentation",
            link: "https://docs.thousandeyes.com/product-documentation/tests"
          }
        ]
      },
      {
        title: "Create a Single Test",
        description: "In this section, we'll create a Web Page Load test to understand various the various components of testing. ",
        image: "/images/task1-step2.png",
        resources: [
          {
            title: "Understanding Test Types",
            link: "https://docs.thousandeyes.com/product-documentation/tests#supported-test-types"
          }
        ]
      },
      {
        title: "Configure Test Settings",
        description: "Select the type of test according to the needs and best practices. For example Page load and Transaction tests are more suited to web pages' performance. Network testing is used best for network segments performance. Hint - Test name should be indicative and include information like site name and use-case",
        image: "/images/task1-step3.png",
        resources: [
          {
            title: "Test Parameters Guide",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-test-settings#the-test-settings-page"
          }
        ]
      },
      {
        title: "Select Test Target",
        description: "Select the test target. It could be an IP Address or a hostname or a URL. Hint - Using Hostnames or URL's can help you detect DNS issues !",
        image: "/images/task1-step4.png",
        resources: [
          {
            title: "Test Parameters Guide",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-test-settings#the-test-settings-page"
          }
        ]
      },
      {
        title: "Set Test Frequency",
        description: "Determine how often the test should run. Low frequencies grant better visibility but will cost more units",
        image: "/images/task1-step5.png",
        resources: [
          {
            title: "Test Frequency and Unit Consumption",
            link: "https://docs.thousandeyes.com/product-documentation/user-management/usage-and-billing/calculating-units"
          }
        ]
      },
      {
        title: "Select Agents",
        description: "Agents are the vantage points from which tests are run. They represent users clusters. Internet users can be represented by Cloud Agents, whereas offices are represented by Enterprise Agents. For this practice, we will choose 3 Cloud Agents in 3 Geographical areas (Tokyo, Amsterdam, Austin)",
        image: "/images/task1-step6.png",
        resources: [
          {
            title: "Agents Selection",
            link: "https://docs.thousandeyes.com/product-documentation/global-vantage-points"
          }
        ]
      },
      {
        title: "Advanced Settings",
        description: "ThousandEyes offers granualirity and control offer specific test configuration. Most testing environments would work using the default settings",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Advanced Test Parameters Configuration",
            link: "https://docs.thousandeyes.com/product-documentation/tests/web-layer-tests#web-layer-tests-advanced-settings"
          }
        ]
      },
      {
        title: "Create Test",
        description: "Create the test to run periodically, or click Run Once, in order to get one round of testing",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Scheduled vs Instant Tests",
            link: "https://docs.thousandeyes.com/product-documentation/tests/scheduled-v-s-instant-tests"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Check Views Page",
    description: "Explore data visualization on the Views page",
    completed: false,
    badge: "Investigator",
    badgeName: "Investigator",
    steps: [
      {
        title: "Access the Views Page",
        description: "Navigate to the Views section from the main dashboard.",
        image: "/images/task2-step1.png",
        resources: [
          {
            title: "Views Overview",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/viewing-data"
          }
        ]
      },
      {
        title: "Select the Test",
        description: "Select the required test. You can filter for specific target and/or specific agents for a more detailed deep-dive",
        image: "/images/task2-step2.png",
        resources: [
          {
            title: "Views Overview",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/viewing-data"
          }
        ]
      },
      {
        title: "Multi-Layered Views",
        description: "ThousandEyes tests cover TCP/IP Layers. Higher level tests (Web layer tests) will automatically include lower level tests (Network layer). We can switch between various views to obtain a detailed performance view across all layers.",
        image: "/images/task2-step3.png",
        resources: [
          {
            title: "Multi Layered Tests and Views",
            link: "https://docs.thousandeyes.com/product-documentation/tests/multi-service-views"
          }
        ]
      },
      {
        title: "Filter View Data",
        description: "Learn how to filter and sort data within views.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Data Filtering Best Practices",
            link: "https://docs.example.com/filtering"
          }
        ]
      },
      {
        title: "Share a View",
        description: "Discover how to share views with team members.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Sharing Options Guide",
            link: "https://docs.example.com/sharing"
          }
        ]
      },
      {
        title: "Export View Data",
        description: "Learn how to export data from views for further analysis.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Data Export Guide",
            link: "https://docs.example.com/exporting"
          }
        ]
      },
      {
        title: "Set Up Automated Reports",
        description: "Configure automatic report generation from view data.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Automated Reporting Guide",
            link: "https://docs.example.com/reports"
          }
        ]
      },
      {
        title: "Customize View Layout",
        description: "Personalize your view layout for optimal data interpretation.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Layout Customization Guide",
            link: "https://docs.example.com/layout"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Deploy a Template",
    description: "Learn how to deploy templates for test operations",
    completed: false,
    steps: [
      {
        title: "Access Template Library",
        description: "Find the template library in the platform.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Template Overview",
            link: "https://docs.example.com/templates"
          }
        ]
      },
      {
        title: "Browse Available Templates",
        description: "Explore the range of pre-configured templates.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Template Categories Guide",
            link: "https://docs.example.com/template-types"
          }
        ]
      },
      {
        title: "Select Appropriate Template",
        description: "Choose a template that suits your monitoring needs.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Template Selection Guide",
            link: "https://docs.example.com/selecting-templates"
          }
        ]
      },
      {
        title: "Customize Template Settings",
        description: "Modify the template parameters to fit your requirements.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Template Customization Guide",
            link: "https://docs.example.com/customize-templates"
          }
        ]
      },
      {
        title: "Configure Deployment Targets",
        description: "Select where the template should be deployed.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Deployment Targets Guide",
            link: "https://docs.example.com/deployment-targets"
          }
        ]
      },
      {
        title: "Set Deployment Schedule",
        description: "Determine when the template should be deployed.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Scheduling Guide",
            link: "https://docs.example.com/scheduling"
          }
        ]
      },
      {
        title: "Deploy the Template",
        description: "Execute the template deployment process.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Deployment Process Guide",
            link: "https://docs.example.com/deployment"
          }
        ]
      },
      {
        title: "Verify Deployment Success",
        description: "Ensure the template has been deployed correctly.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Verification Guide",
            link: "https://docs.example.com/verification"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Create Your First Dashboard",
    description: "Customize and organize data into a personalized dashboard",
    completed: false,
    badge: "Designer",
    badgeName: "Designer",
    steps: [
      {
        title: "Access Dashboard Creator",
        description: "Navigate to the dashboard creation tool.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Dashboard Overview",
            link: "https://docs.example.com/dashboards"
          }
        ]
      },
      {
        title: "Plan Your Dashboard Layout",
        description: "Decide on the structure and components of your dashboard.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Dashboard Planning Guide",
            link: "https://docs.example.com/dashboard-planning"
          }
        ]
      },
      {
        title: "Add Widgets",
        description: "Select and add widgets to your dashboard.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.example.com/widgets"
          }
        ]
      },
      {
        title: "Configure Data Sources",
        description: "Connect your widgets to appropriate data sources.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Data Source Configuration",
            link: "https://docs.example.com/data-sources"
          }
        ]
      },
      {
        title: "Arrange Dashboard Elements",
        description: "Organize your dashboard components for optimal viewing.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Layout Best Practices",
            link: "https://docs.example.com/dashboard-layout"
          }
        ]
      },
      {
        title: "Set Refresh Intervals",
        description: "Configure how often your dashboard data updates.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Refresh Settings Guide",
            link: "https://docs.example.com/refresh-settings"
          }
        ]
      },
      {
        title: "Save and Share Dashboard",
        description: "Finalize your dashboard and share with team members.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Dashboard Sharing Guide",
            link: "https://docs.example.com/dashboard-sharing"
          }
        ]
      },
      {
        title: "Set Dashboard Permissions",
        description: "Control who can view or edit your dashboard.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Permission Settings Guide",
            link: "https://docs.example.com/dashboard-permissions"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Create the First Custom Alert",
    description: "Set up alerts for proactive monitoring",
    completed: false,
    steps: [
      {
        title: "Navigate to Alert Section",
        description: "Find the alerts configuration area in the platform.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Alerts Overview",
            link: "https://docs.example.com/alerts-overview"
          }
        ]
      },
      {
        title: "Select Alert Type",
        description: "Choose the appropriate type of alert for your needs.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Alert Types Guide",
            link: "https://docs.example.com/alert-types"
          }
        ]
      },
      {
        title: "Define Alert Conditions",
        description: "Set the thresholds and conditions that trigger the alert.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Alert Conditions Guide",
            link: "https://docs.example.com/alert-conditions"
          }
        ]
      },
      {
        title: "Configure Notification Methods",
        description: "Set up how and to whom alerts will be sent.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Notification Configuration",
            link: "https://docs.example.com/notifications"
          }
        ]
      },
      {
        title: "Set Alert Priority",
        description: "Assign appropriate priority levels to your alert.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Priority Levels Guide",
            link: "https://docs.example.com/priority-levels"
          }
        ]
      },
      {
        title: "Create Alert Schedule",
        description: "Define when the alert should be active.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Alert Scheduling Guide",
            link: "https://docs.example.com/alert-scheduling"
          }
        ]
      },
      {
        title: "Test Alert Functionality",
        description: "Verify that your alert works as expected.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Testing Alerts Guide",
            link: "https://docs.example.com/testing-alerts"
          }
        ]
      },
      {
        title: "Review Alert History",
        description: "Learn how to review past alert triggers and responses.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "Alert History Guide",
            link: "https://docs.example.com/alert-history"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Create the Role-Based Profile",
    description: "Configure role-based access controls for enhanced security",
    completed: false,
    badge: "Security Guru",
    badgeName: "Security Guru",
    steps: [
      {
        title: "Access Role Management",
        description: "Navigate to the role management section of the platform.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Role Management Overview",
            link: "https://docs.example.com/role-management"
          }
        ]
      },
      {
        title: "Understand Available Roles",
        description: "Learn about the default roles and their permissions.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Default Roles Guide",
            link: "https://docs.example.com/default-roles"
          }
        ]
      },
      {
        title: "Create a Custom Role",
        description: "Define a new role tailored to your organization's needs.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Custom Roles Guide",
            link: "https://docs.example.com/custom-roles"
          }
        ]
      },
      {
        title: "Configure Role Permissions",
        description: "Assign appropriate permissions to your custom role.",
        image: "photo-1531297484001-80022131f5a1",
        resources: [
          {
            title: "Permission Configuration",
            link: "https://docs.example.com/permissions"
          }
        ]
      },
      {
        title: "Assign Role to Users",
        description: "Link users to appropriate roles within the system.",
        image: "photo-1487058792275-0ad4aaf24ca7",
        resources: [
          {
            title: "User Assignment Guide",
            link: "https://docs.example.com/user-assignment"
          }
        ]
      },
      {
        title: "Test Role Restrictions",
        description: "Verify that role-based restrictions work as expected.",
        image: "photo-1488590528505-98d2b5aba04b",
        resources: [
          {
            title: "Testing Access Controls",
            link: "https://docs.example.com/testing-access"
          }
        ]
      },
      {
        title: "Review Access Logs",
        description: "Learn how to monitor user access based on roles.",
        image: "photo-1461749280684-dccba630e2f6",
        resources: [
          {
            title: "Access Logs Guide",
            link: "https://docs.example.com/access-logs"
          }
        ]
      },
      {
        title: "Optimize Role Structure",
        description: "Refine your role structure for optimal security and usability.",
        image: "photo-1486312338219-ce68d2c6f44d",
        resources: [
          {
            title: "Role Optimization Guide",
            link: "https://docs.example.com/role-optimization"
          }
        ]
      }
    ]
  }
];

export const FINAL_BADGE = {
  name: "ThousandEyes Explorer",
  description: "You've completed all onboarding tasks and are ready to utilize the platform effectively!",
  image: "trophy"
};
