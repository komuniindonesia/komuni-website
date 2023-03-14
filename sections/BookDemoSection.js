import styles from "@/styles/BookDemoSection.module.css";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "None" },
  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BookDemoSection = () => {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div id="demo" className="bg-white py-24 sm:py-32 px-10">
      <div className="mx-auto max-w-4xl text-center flex flex-col gap-2">
        <p className="tag">Book demo</p>
        <h2 className="title">
          Optimize your community management with one comprehensive platform.
        </h2>
        <p className="description">
          See how Komuni can help you improve the community living and working
          experience for all your lovely residents
        </p>
      </div>
      <div className="mx-auto max-w-2xl text-center flex flex-col gap-2 mt-16 mb-6">
        <p className={styles.formTitle}>
          Discover why Komuni is the preferred choice for gated communities in
          Indonesia <br />
          Sign up for a demo today!
        </p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className={styles.input}
              placeholder="Your Name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className={styles.input}
              placeholder="Community Apartment Name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className={styles.input}
              placeholder="Your Email"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className={styles.input}
              placeholder="Phone Number"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Combobox
              as="div"
              value={selectedPerson}
              onChange={setSelectedPerson}
            >
              <div className="relative mt-2">
                <Combobox.Input
                  className={styles.input}
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(person) => person?.name}
                  placeholder="Apartment Size"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-4 pl-3 pr-9",
                            active ? "bg-[#FF5722] text-white" : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span
                              className={classNames(
                                "block truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-[#FF5722]"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Combobox
              as="div"
              value={selectedPerson}
              onChange={setSelectedPerson}
            >
              <div className="relative mt-2">
                <Combobox.Input
                  className={styles.input}
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(person) => person?.name}
                  placeholder="Region"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-4 pl-3 pr-9",
                            active ? "bg-[#FF5722] text-white" : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span
                              className={classNames(
                                "block truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-[#FF5722]"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
          </div>
          <div className="col-span-2 text-center mt-4">
            <button type="button" className="buttonDemo px-10">
              sign up for a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoSection;
