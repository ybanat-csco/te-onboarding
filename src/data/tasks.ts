
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
        image: "/images/task1-step7.png",
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
        image: "/images/task1-step8.png",
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
        title: "Multi-Layered Views",
        description: "After enabling Page Load time, HTTP Availability, Network Latency, Loss and BGP Path Changes, we can easily correlate any incident across layers. For example, loss in HTTP Availability may look like an application layer outage at first, but if it coincides with a spike in network loss, then it may indicate an underlying network issue.",
        image: "/images/task2-step4.png",
        resources: [
          {
            title: "What Does Your Test Result Mean?",
            link: "https://docs.thousandeyes.com/product-documentation/tests/thousandeyes-metrics-what-do-your-results-mean"
          }
        ]
      },
      {
        title: "Page Load View : Waterfall Diagram",
        description: "Page load View offers a waterfall diagram that will assist you to understand the domains and components involved in building your webpage and identify the time elapsed to load and fetch each component.",
        image: "/images/task2-step5.png",
        resources: [
          {
            title: "Understand Waterfall Charts",
            link: "https://docs.thousandeyes.com/product-documentation/browser-synthetics/navigating-waterfall-charts-for-page-load-and-transaction-tests"
          }
        ]
      },
      {
        title: "HTTP Layer View",
        description: "HTTP Layer View offers the status of each phase for connecting to the target server. This will simplify the identification of the troubleshooting process by pinpointing the problematic phase. It also provides the certificate chain, and the content of the HTTP Request and Response Headers",
        image: "/images/task2-step6.png",
        resources: [
          {
            title: "HTTP Layer",
            link: "https://docs.thousandeyes.com/product-documentation/tests/http-server-tests"
          }
        ]
      },
      {
        title: "Network Layer",
        description: "Network Layer provides an end-to-end path visualization which will unlock visibility on the performance on elements even outside of your organization. This will assist you in pinpointing and identifying any problematic node. Notice how target node is different according to each Geographical area. ",
        image: "/images/task2-step7.png",
        resources: [
          {
            title: "Path Visualization",
            link: "https://docs.thousandeyes.com/product-documentation/internet-and-wan-monitoring/path-visualization"
          }
        ]
      },
      {
        title: "Share Your Test Results",
        description: "You can also save the test snapshot to share it across teams or ISP's or 3rd-party vendors. You can visit your snapshot repository from Manage>Sharing>Private Snapshots",
        image: "/images/task2-step8.png",
        resources: [
          {
            title: "Snapshots",
            link: "https://docs.thousandeyes.com/product-documentation/tests/sharing-test-data"
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
        description: "ThousandEyes offers a wide array of ready-to-use templates that monitors the most famous SaaS applications such as Microsoft Services, Slack, Google Services and many more.",
        image: "/images/task3-step1.png",
        resources: [
          {
            title: "Template Overview",
            link: "https://docs.thousandeyes.com/product-documentation/tests/templates"
          }
        ]
      },
      {
        title: "Selecting a Template",
        description: "To Deploy a template, click on Start Monitoring button on the top right corner and select your template",
        image: "/images/task3-step2.png",
        resources: [
          {
            title: "Template Categories Onboarding",
            link: "https://docs.thousandeyes.com/product-documentation/tests#onboarding"
          }
        ]
      },
      {
        title: "Configuring Your Template",
        description: "Configure Your Template. Select the Enterprise and Cloud Agents to run the test, DNS Servers to use, template name, and the frequency of testing. You can toggle the tests on/off. Remember : Enterprise Agents represent offices and Cloud Agents represent Internet Users. Hint :If you don't have Enterprise Agents yet, you can use Cloud Agents on both fields.",
        image: "/images/task3-step3.png",
        resources: [
          {
            title: "Template Categories Onboarding",
            link: "https://docs.thousandeyes.com/product-documentation/tests#onboarding"
          }
        ]
      },
      {
        title: "Review The Deployment",
        description: "Deployment Summary displays the assets to be deployed. Notice that not only tests are deployed but also Labels to categorize tests and Dashboards to display the results",
        image: "/images/task3-step4.png",
        resources: [
          {
            title: "Labels",
            link: "https://docs.thousandeyes.com/product-documentation/tests/working-with-labels-for-agent-and-test-groups"
          }
        ]
      },
      {
        title: "Review And Deploy",
        description: "Deploy the template",
        image: "/images/task3-step5.png",
        resources: [
          {
            title: "Deployment Targets Guide",
            link: "https://docs.example.com/deployment-targets"
          }
        ]
      },

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
        title: "Dashboards Overview",
        description: "ThousandEyes dashboards are a way to see customized live views of your test data, or Internet Insights collective intelligence. Dashboards are composed of widgets including maps, tables, bar and pie charts, and various other types of visual charting.",
        image: "/images/task4-step1.png",
        resources: [
          {
            title: "Dashboard Overview",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards"
          }
        ]
      },
      {
        title: "Creating a Dashboard",
        description: "You can create your dashboard by starting with a blank page, or utilize one of the ready-to-use templates, or use the dashboards that are deployed by Tests Templates",
        image: "/images/task4-step2.png",
        resources: [
          {
            title: "Dashboard Templates",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-templates"
          }
        ]
      },
      {
        title: "Add Widgets",
        description: "A widget type refers to a category of widgets. For example, live status widgets includes the Agent Status and Alert List widgets.",
        image: "/images/task4-step3.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Configure Data Sources",
        description: "Connect your widgets to appropriate data sources. The widget can source data from Agents, Tests, Devices, Endpoints and Alerts and many other sources",
        image: "/images/task4-step4.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Select the Measure",
        description: "Widgets can display the selected measure depending on the selected layer, for example Network Layer will display Loss, Latency, Jitter, and Bandwidth.",
        image: "/images/task4-step5.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Arrange Widgets",
        description: "You can rearrange widgets to best suit your needs. You can also resize them to fit your dashboard layout.",
        image: "/images/task4-step6.png",
        resources: [
          {
            title: "Widget Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-widgets"
          }
        ]
      },
      {
        title: "Save and Share Dashboard",
        description: "Dashboards can be saved and shared in PDF or CSV formats. Widgets can also be embedded in status pages in an iFrame format",
        image: "/images/task4-step7.png",
        resources: [
          {
            title: "Dashboard Sharing Guide",
            link: "https://docs.thousandeyes.com/product-documentation/dashboards/dashboard-shares-snapshots"
          }
        ]
      },
      {
        title: "Dashboard Creation Best Practices",
        description: "This document provides the Art of Dashboard Creation.",
        image: "/images/task4-step8.png",
        resources: [
          {
            title: "Permission Settings Guide",
            link: "https://www.ciscolive.com/c/dam/r/ciscolive/emea/docs/2024/pdf/BRKOPS-2076.pdf"
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
        description: "The ThousandEyes platform allows you to configure highly customizable alert rules and assign them to tests, in order to highlight or be notified of events of interest.",
        image: "/images/task5-step1.png",
        resources: [
          {
            title: "Alerts Overview",
            link: "https://docs.thousandeyes.com/product-documentation/alerts"
          }
        ]
      },
      {
        title: "Select Alert Type",
        description: "Each feature has its own set of alerts. For this excercise, we will create an alert for Network and App Synthetics. You can also create alerts for Internet Insights, Endpoint Agents, and Network Devices.",
        image: "/images/task5-step2.png",
        resources: [
          {
            title: "Alert Types Guide",
            link: "https://docs.thousandeyes.com/product-documentation/alerts/creating-and-editing-alert-rules"
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
