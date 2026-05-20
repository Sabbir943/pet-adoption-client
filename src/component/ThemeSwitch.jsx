"use client";
import { useTheme } from "next-themes";
import {Sun, Moon} from "@gravity-ui/icons";
import {Switch} from "@heroui/react";

const ThemeSwitch = () => {
     const { theme, setTheme } = useTheme();
    return (
   
      <Switch onChange={()=> setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-7 w-12.75 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-6 bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-cyan-600" />
                ) : (
                  <Moon className="size-4 text-blue-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
    );
};

export default ThemeSwitch;