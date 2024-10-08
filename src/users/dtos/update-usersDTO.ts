import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, Matches } from "class-validator";

export class UpdateUsersDTO {
  @ApiProperty({
    example: "Paulo Souza",
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: "38999887766",
  })
  @IsOptional()
  @Matches(/^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/, {
    message: "Invalid phone number",
  })
  phone?: string;

  @ApiProperty({
    example: "Salinas-MG",
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({
    example: "true or false",
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
