import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // for theme management, optional
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "Todo/Components/ui/drawer";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

import { radius0, radius03, radius05, radius075, radius1 } from "./themeRadius";
import {
  blueTheme,
  defaultTheme,
  greenTheme,
  orangeTheme,
  redTheme,
  roseTheme,
  violetTheme,
  yellowTheme,
} from "./themeColors";
import { Button } from "Todo/Components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useCoreContext } from "Todo/Context/AppProvider";
export const ThemeDrawer = ({
  open: isDrawerOpen,
  setOpen: setIsDrawerOpen,
}: {
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  const [selectedColor, setSelectedColor] = useState(
    "oklch(0.21 0.006 285.885)"
  );
  const [borderRadius, setBorderRadius] = useState("0.5rem");
  const [selectedTheme, setSelectedTheme] = useState<any>();
  const { mode, setMode } = useCoreContext();
  const { setTheme } = useTheme();
  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   console.log({theme})
  //   if (theme) setMode(theme);
  //   setTheme(JSON.parse(theme ?? "light"));
  // }, []);

  useEffect(() => {
    const themeDrawer = localStorage.getItem("themeDrawer");
    if (themeDrawer) {
      const parsedThemeDrawer = JSON.parse(themeDrawer);
      setBorderRadius(parsedThemeDrawer.radius);
      setSelectedColor(
        findObjectMatchValue({
          matchkey: "name",
          matchValue: parsedThemeDrawer.colorName,
          returnKey: "color",
          record: primaryColors,
        })
      );
      setSelectedTheme(
        findObjectMatchValue({
          matchkey: "name",
          matchValue: parsedThemeDrawer.colorName,
          returnKey: "theme",
          record: primaryColors,
        })
      );
    }
    console.log({ selectedTheme, selectedColor, borderRadius });
  }, []);

  const setLocalStorage = ({
    type,
    value,
  }: {
    type: "Radius" | "Color";
    value: string;
  }) => {
    let localThemeDrawer: any = localStorage.getItem("themeDrawer");
    if (localThemeDrawer) {
      localThemeDrawer = JSON.parse(localThemeDrawer) ?? {};
    }
    let themeDrawer = {};
    if (type == "Radius") {
      themeDrawer = {
        ...localThemeDrawer,
        radius: value,
      };
    } else if (type == "Color") {
      themeDrawer = {
        ...localThemeDrawer,
        colorName: value,
      };
    }

    localStorage.setItem("themeDrawer", JSON.stringify(themeDrawer));
  };

  const findObjectMatchValue = ({
    matchkey,
    matchValue,
    returnKey,
    record,
  }: {
    matchkey: string;
    returnKey: string;
    matchValue: string;
    record: any[];
  }) => {
    if (record) {
      const foundRecord = record.find(
        (ele: any) => ele[matchkey] == matchValue
      );
      if (foundRecord) {
        return foundRecord[returnKey];
      }
    }
  };

  // useEffect(()=>{

  // },[selectedTheme])

  // Handle border-radius change
  const handleBorderRadiusChange = (radius: string) => {
    setBorderRadius(radius);
    setLocalStorage({ type: "Radius", value: radius });
  };

  const handleSelectTheme = (item: (typeof primaryColors)[0]) => {
    setLocalStorage({ type: "Color", value: item.name });
    setSelectedColor(item.color);
    setSelectedTheme(item.theme);
  };

  const primaryColors = [
    {
      name: "Default",
      color: "oklch(0.21 0.006 285.885)",
      theme: defaultTheme,
    },
    { name: "Red", color: "oklch(0.637 0.237 25.331)", theme: redTheme },
    { name: "Rose", color: "oklch(0.645 0.246 16.439)", theme: roseTheme },
    { name: "Green", color: "oklch(0.723 0.219 149.579)", theme: greenTheme },
    { name: "Orange", color: "oklch(0.705 0.213 47.604)", theme: orangeTheme },
    { name: "Violet", color: "oklch(0.606 0.25 292.717)", theme: violetTheme },
    { name: "Blue", color: "oklch(0.623 0.214 259.815)", theme: blueTheme },
    { name: "Yellow", color: "oklch(0.795 0.184 86.047)", theme: yellowTheme },
  ];

  const borderRadiusArray = [
    { name: "0", value: "0rem" },
    { name: "0.3", value: "0.3rem" },
    { name: "0.5", value: "0.5rem" },
    { name: "0.75", value: "0.75rem" },
    { name: "1", value: "1rem" },
  ];

  const handleApply = () => {
    if (mode === "dark") {
      for (const [Key, value] of Object.entries(selectedTheme.dark ?? {})) {
        document.documentElement.style.setProperty(Key, value as string);
      }
    } else {
      for (const [Key, value] of Object.entries(selectedTheme.dark ?? {})) {
        document.documentElement.style.setProperty(Key, value as string);
      }
    }
  };

  return (
    <Drawer
      onOpenChange={() => setIsDrawerOpen(false)}
      open={isDrawerOpen}
      direction="right"

      // title="Select Theme"
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Theme</DrawerTitle>
          <DrawerDescription>Set the theme according to you</DrawerDescription>
        </DrawerHeader>
        <div className=" flex flex-col gap-3 p-4">
          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-medium">Color</h3>
            <div className="flex flex-wrap gap-2 ">
              {primaryColors?.map(
                (item: (typeof primaryColors)[0], index: number) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    style={{
                      color:
                        item?.name == "Default"
                          ? mode == "dark"
                            ? "white"
                            : "black"
                          : item?.color,
                      boxShadow:
                        selectedColor == item?.color
                          ? "2px 2px 5px lightgrey"
                          : "",
                      border:
                        selectedColor == item?.color
                          ? "1px ridge lightgrey"
                          : "",
                    }}
                    onClick={() => handleSelectTheme(item)}
                  >
                    {selectedColor == item?.color ? (
                      <FaCircleCheck />
                    ) : (
                      <FaCircle />
                    )}

                    <span>{item?.name}</span>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Border Radius Selection */}
          <div className="mt-4">
            <h3 className="text-lg font-medium">Select Border Radius</h3>
            <div className="flex space-x-4">
              {borderRadiusArray?.map(
                (item: { name: string; value: string }, index: number) => (
                  <Button
                    style={{
                      boxShadow:
                        borderRadius == item?.value
                          ? "2px 2px 5px lightgrey"
                          : "",
                      border:
                        borderRadius == item?.value ? "1px ridge #D3D3D3" : "",
                    }}
                    key={index}
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => handleBorderRadiusChange(item?.value)}
                  >
                    {item?.name}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Apply Settings */}
          <Button
            variant={"outline"}
            onClick={() => {
              handleApply();
              document.documentElement.style.setProperty(
                "--primary",
                selectedColor
              );
              document.documentElement.style.setProperty(
                "--radius",
                borderRadius
              );
            }}
            className="mt-4 p-2 rounded"
          >
            Apply
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ThemeDrawer;
