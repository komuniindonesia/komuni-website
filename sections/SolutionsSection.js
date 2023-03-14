import {
  VisitorManagementIcon,
  DeliveryManagementIcon,
  SupportManagementIcon,
  CommunicationIcon,
  NoticeBoardIcon,
  PaymentManagementIcon,
} from "@/helpers/icons";
import styles from "@/styles/SolutionsSection.module.css";

const SolutionsSection = () => {
  const features = [
    {
      name: "Visitor Management",
      description:
        "Allowing for quick and easy visitor access to the gated community through efficient visitor check-in process using digital pass creation and QR code scanning or manual verification.",
      icon: VisitorManagementIcon,
    },
    {
      name: "Delivery management",
      description:
        "Organize your delivery with the ability to receive and manage deliveries while residents track the delivery status and estimated delivery time with provided delivery instructions",
      icon: DeliveryManagementIcon,
    },
    {
      name: "Support Management",
      description:
        "Ensuring that residents are satisfied with their living environment by addressing the maintenance issues promptly and efficiently, and helping to keep the community running smoothly.",
      icon: SupportManagementIcon,
    },
    {
      name: "Communication",
      description:
        "Community-wide communication and engagement through the app, allowing residents to connect with each other and the management committee",
      icon: CommunicationIcon,
    },
    {
      name: "Notice Board",
      description:
        "Community notice board feature for important messages, announcements, send important announcements, reminders, or alerts to all residents or specific group.",
      icon: NoticeBoardIcon,
    },
    {
      name: "Payment Management",
      description:
        "Enables residents to make payments and manage their monthly community fees or other charges such as utility bills, parking fees, and maintenance costs through the app.",
      icon: PaymentManagementIcon,
    },
  ];

  return (
    <div
      id="solutions"
      className="bg-[url('/images/solutions-bg.png')] bg-cover py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 md:gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h2 className="tag">Solutions</h2>
            <p className="title">All-in-one community management platform</p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span className={styles.featureTitle}>{feature.name}</span>
                </dt>
                <dd className={styles.featureDescription}>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
