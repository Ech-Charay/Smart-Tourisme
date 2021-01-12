package com.ensah.Conversion;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.ArrayList;
import org.apache.commons.io.FileUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@CrossOrigin(origins = "*" ,maxAge = 3600)
@RestController
@RequestMapping("/album")
public class ConversionController {


    public static String uploadDirectory = System.getProperty("user.dir") + "/src/main/resources/static/images/uploads";
    @Autowired
    private ResourceLoader resourceLoader;

    @PostMapping(path = "/video", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public @ResponseBody
    String convertToVideo(@RequestPart("file") MultipartFile[] files) throws IOException, InterruptedException {

        System.out.println("hello");

        for (int i = 0; i < files.length; i++) {
            Path fileNameAndPath = Paths.get(uploadDirectory, files[i].getOriginalFilename());
            System.out.println(fileNameAndPath);
            try {
                Files.write(fileNameAndPath, files[i].getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        File myFolder = new File(uploadDirectory);
        File[] file_array = myFolder.listFiles();
        for (int i = 0; i < file_array.length; i++) {

            if (file_array[i].isFile()) {

                File myfile = new File(uploadDirectory +
                        "\\" + file_array[i].getName());
                String long_file_name = file_array[i].getName();

                myfile.renameTo(new File(uploadDirectory +
                        "\\img0" + (i + 1) + ".png"));
            }
        }
        ArrayList<String> procssArgs = new ArrayList<>();
        procssArgs.add("src\\main\\resources\\static\\ffmpeg-4.3.1-2020-11-19-full_build\\bin\\ffmpeg");
        procssArgs.add("-framerate");
        procssArgs.add("1/2");
        procssArgs.add("-i");
        procssArgs.add(System.getProperty("user.dir") + "\\src\\main\\resources\\static\\images\\uploads\\img%02d.png");
        procssArgs.add("-vf");
        procssArgs.add("scale=1920x1080");
        procssArgs.add("-c:v");
        procssArgs.add("libx264");
        procssArgs.add("-r");
        procssArgs.add("30");
        procssArgs.add("-pix_fmt");
        procssArgs.add("yuv420p");
        procssArgs.add("-y");
        procssArgs.add(System.getProperty("user.dir") + "\\src\\main\\resources\\video.mp4");
        System.out.println(procssArgs);
        ProcessBuilder p = new ProcessBuilder(procssArgs);
        Process proc = p.start();
        System.out.println("Waiting...");
        Thread.sleep(30000);

        // kill the process
        proc.destroy();
        System.out.println("Process destroyed.");

        return System.getProperty("user.dir") + "\\src\\main\\resources\\static\\videos\\video.mp4";
    }


    @RequestMapping("/file/{fileName}")
    public void downloadSampleCSV(HttpServletRequest request,
                                  HttpServletResponse response,

                                  @PathVariable("fileName") String fileName) throws IOException, URISyntaxException {
        File myFolder = new File(uploadDirectory);
        FileUtils.cleanDirectory(myFolder);

        System.out.println("Inside the download controller," +
                " resource fileName =" + fileName);


        Resource resource = resourceLoader
                .getResource("classpath:" + fileName);
        if (resource.exists()) {
            System.out.println("Resource exists!");
            response.setContentType("MediaType.APPLICATION_OCTET_STREAM");

            response.setContentLength((int) resource.contentLength());
            InputStream inputStream = resource.getInputStream();
            FileCopyUtils.copy(inputStream, response.getOutputStream());

        }

    }

}